using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlanetarySuperStoreApi.Models;

namespace PlanetarySuperStoreApi.Controllers
{

    /// <summary>
    /// Controller for exposing endpoints related to products. Provides methods for getting all, or specific
    /// products in the store.
    /// </summary>
    [Route("api/Product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductController(AppDbContext context){
            _context = context;
        }

        /// <summary>
        /// Endpoint that provides a list of all items currently in the cart.
        /// </summary>
        /// <returns>All items in the cart, as a list of CartItem objects.</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        /// <summary>
        /// Endpoint for getting a specific product.
        /// </summary>
        /// <returns>Product with the given id. If this does not represent a valid response, a
        ///     NotFound response is returned.</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(long id)
        {
            var product = await _context.Products.FindAsync(id);

            // if the given id is not valid, return an error response
            if (product == null){
                return NotFound();
            }

            // return a product with the given id
            return product;
        }

    }
}
