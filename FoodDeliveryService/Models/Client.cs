using System.Collections.Generic;

namespace FoodDeliveryService
{
    public partial class Client : User
    {
        public Client()
        {
            Orders = new HashSet<Order>();
        }

        public string Address { get; set; }
        public int? DiscountId { get; set; }

        public virtual Discount Discount { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
