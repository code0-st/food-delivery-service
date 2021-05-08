using System;
using System.Collections.Generic;

#nullable disable

namespace FoodDeliveryService
{
    public partial class Client
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public int? DiscountId { get; set; }
        public string UserName { get; set; }
        public int? Age { get; set; }
        public string Phone { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Patronymic { get; set; }
        public virtual Discount IdNavigation { get; set; }

    }
}
