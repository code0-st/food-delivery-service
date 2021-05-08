using System.Collections.Generic;

namespace FoodDeliveryService
{
    public partial class PicUpPoint
    {
        public PicUpPoint()
        {
            Orders = new HashSet<Order>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
