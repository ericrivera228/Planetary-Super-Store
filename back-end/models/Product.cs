namespace PlanetarySuperStoreApi.Models
{
    /// <summary>
    /// Represents a prodcut within the store. (e.g., in the case of this application, planets)
    /// </summary>
    public class Product
    {
        public long Id { get; set; }
        
        // planet name. ex. KE-122
        public string Name { get; set; }

        // price (in US dollars) for a single unit
        public decimal Price { get; set; }

        // location (from within the react app) of the picture for this product
        public string ImageSrc { get; set; }

        public string Description { get; set; }
    }
}