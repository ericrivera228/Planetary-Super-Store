namespace PlanetarySuperStoreApi.Models
{
    /// <summary>
    /// Represents a relationship between a product in the cart, indicating a product is included in the cart.
    /// </summary>
    public class CartItem
    {
        public long Id { get; set; }
        public long productId { get; set; }
        
        // Number of product units in the cart. ex., a value of '5' means the user wishes to purchase 5 copies 
        /// of this product.
        public int quantity { get; set; }
    }
}