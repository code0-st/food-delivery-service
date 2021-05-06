using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace FoodDeliveryService
{
    public partial class Worker
    {
        public int Id { get; set; }
        public string WorkPhone { get; set; }
        public int DepartmentId { get; set; }
        public int PositionId { get; set; }
        public string UserName { get; set; }
        public int? Age { get; set; }
        public string Phone { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Patronymic { get; set; }
        public Department Department { get; set; }
        public Position Position { get; set; }
    }
}
