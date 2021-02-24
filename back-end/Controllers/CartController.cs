using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;
using PlanetarySuperStoreApi.Models;

namespace PlanetarySuperStoreApi.Controllers
{
    /// <summary>
    /// Controller for exposing endpoints related to cart use. Provides methods for adding, updating, and removing items
    /// from the cart.
    /// </summary>
    [ApiController]
    [Route("api/Cart")]
    public class CartController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CartController(AppDbContext context){
            _context = context;
        }

        /// <summary>
        /// Endpoint that provides information about the current state of the cart. Calculates the total cost of the cart.
        /// </summary>
        /// <returns>Cart information as Cart object.</returns>
        [HttpGet]
        public Cart GetCartSummary()
        {
            var totalCost = 0m;
            var cartItems = _context.CartItems.ToList();
            
            // Calculate the price of each item in the cart (number of units selected * price)
            cartItems.ForEach(x =>{
                
                // Get the product object
                Product product = _context.Products.FirstOrDefault(y => y.Id == x.productId);

                // defenseive code - the product should usually be found
                if(product != null){
                    totalCost += product.Price * x.quantity;
                }

            });

            // return built cart summary
            return new Cart{
                items = cartItems,
                TotalCost = totalCost
            };
        }

        /// <summary>
        /// Endpoint that allows the user to add a product to the cart. If the product is already in the 
        /// cart, this method does nothing.
        /// </summary>
        /// <param name="productId">Id of the product to be added to the cart.  Returns a NotFound response if this does 
        ///     not represent a valid product.</param>
        /// <returns>NoContent result.</returns>
        [HttpPut]
        public async Task<IActionResult> AddProductToCart(long productId)
        {

            // If the product id provided represents a valid product - return an error
            if (await _context.Products.FindAsync(productId) == null)
            {
                return NotFound($"Could not find product with id {productId}.");
            }

            // If the given product is already in the cart, just return. This is defensive code - the 
            // front-end shouldn't allow this to happen.
            if(_context.CartItems.Where(x => x.productId == productId).FirstOrDefault() != null){
                return NoContent();
            }

            // Add the new product to the cart and save the changes
            _context.CartItems.Add(new CartItem{ productId = productId, quantity = 1});
            await _context.SaveChangesAsync();

            // Return successful response
            return NoContent();
        }

        /// <summary>
        /// Endpoint that allows the user to change the quantity of a product in the cart. 
        /// </summary>
        /// <param name="cartItemId">Id of the cartItem whose quantity is to be updated. Returns a NotFound response if this 
        ///     does not represent a valid cartItem.</param>
        /// <param name="quantity">New number of product units in the cart. Returns a BadRequest response if this 
        ///     value is less than 1.</param>
        /// <returns>NoContent result.</returns>
        [HttpPut("{cartItemId:long}/{quantity:int}")]
        public async Task<IActionResult> ChangeItemQuantity(long cartItemId, int quantity)
        {

            // Doesn't make sense to set quantity to something less than 1 (if an item is being remove from the 
            // cart altogether, use the delete method); return an error repsonse
            if(quantity < 1){
                return BadRequest("Quantity cannot be less than 0.");
            }

            // Find the appropriate cartItem object
            var cartItem = await _context.CartItems.FindAsync(cartItemId);

            // If the cartItem wasn't found, return an error response
            if (cartItem == null){
                return NotFound($"Could not find cart item with id {cartItemId}.");
            }

            // Update the quantity and save the changes
            cartItem.quantity = quantity;
            await _context.SaveChangesAsync();

            // Return successful result
            return NoContent();
        }

        /// <summary>
        /// Endpoint that allows the user to remove an item from the cart. 
        /// </summary>
        /// <param name="cartItemId">Id of the cartItem to be removed. Returns a NotFound response if this does not represent a valid cartItem.</param>
        /// <returns>NoContent result.</returns>
        [HttpDelete("{cartItemId:long}")]
        public async Task<IActionResult> DeleteCartItem(long cartItemId)
        {
            // Look for a cartItem with the given id
            var cartItem = await _context.CartItems.FindAsync(cartItemId);
            
            // If a cartItem wasn't found, return an error response 
            if (cartItem == null){
                return NotFound();
            }

            // Remove the item from the card and save the changes
            _context.CartItems.Remove(cartItem);
            await _context.SaveChangesAsync();

            // Return successful result
            return NoContent();
        }

    }
}
