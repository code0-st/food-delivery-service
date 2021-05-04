using System;
using System.Collections.Generic;

#nullable disable

namespace FoodDeliveryService
{
    public partial class Client
    {
        public Client()
        {
            Orders = new HashSet<Order>();
        }

        public int Id { get; set; }
        public string Address { get; set; }
        public int? DiscountId { get; set; }

        public virtual User Id1 { get; set; }
        public virtual Discount IdNavigation { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
