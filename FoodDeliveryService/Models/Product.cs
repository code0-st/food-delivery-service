using System;
using System.Collections.Generic;

#nullable disable

namespace FoodDeliveryService
{
    public partial class Product
    {
        public Product()
        {
            ProductsInOrders = new HashSet<ProductsInOrder>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

        public virtual ICollection<ProductsInOrder> ProductsInOrders { get; set; }
    }
}
