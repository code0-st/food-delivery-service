using System;
using System.Collections.Generic;

#nullable disable

namespace FoodDeliveryService
{
    public partial class Discount
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public virtual Client Client { get; set; }
    }
}
