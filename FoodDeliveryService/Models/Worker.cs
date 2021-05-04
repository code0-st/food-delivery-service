using System;
using System.Collections.Generic;

#nullable disable

namespace FoodDeliveryService
{
    public partial class Worker
    {
        public int Id { get; set; }
        public string WorkPhone { get; set; }
        public int DepartmentId { get; set; }
        public int PositionId { get; set; }

        public virtual Department Department { get; set; }
        public virtual User IdNavigation { get; set; }
        public virtual Position Position { get; set; }
    }
}
