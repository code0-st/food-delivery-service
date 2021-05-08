using System;
using System.Collections.Generic;

namespace FoodDeliveryService
{
    public partial class Order
    {
        public Order()
        {
            ProductsInOrders = new HashSet<ProductsInOrder>();
        }

        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateClosed { get; set; }
        public int ClientId { get; set; }
        public int StatusId { get; set; }
        public int? PicUpPointId { get; set; }

        public virtual Client Client { get; set; }
        public virtual PicUpPoint PicUpPoint { get; set; }
        public virtual OrderStatus Status { get; set; }
        public virtual ICollection<ProductsInOrder> ProductsInOrders { get; set; }
    }
}
