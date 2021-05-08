namespace FoodDeliveryService
{
    public partial class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int? Weight { get; set; }
        public int CatalogId { get; set; }
    }
}
