using System;
using System.Collections.Generic;

#nullable disable

namespace FoodDeliveryService
{
    public partial class Worker : User
    {
        public string WorkPhone { get; set; }
        public virtual Department Department { get; set; }
        public virtual Position Position { get; set; }
    }
}
