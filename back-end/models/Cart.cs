using System.Collections.Generic;

namespace PlanetarySuperStoreApi.Models
{
    /// <summary>
    /// Represents the state of a cart.
    /// </summary>
    public struct Cart
    {
        // total cost for all items (e.g., the sum of each item's total cost)
        public decimal TotalCost { get; set; }
        public  List<CartItem> items { get; set; }
    }
}