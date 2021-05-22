using System;

namespace FoodDeliveryService
{
    public partial class User
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Patronymic { get; set; }
        public string Phone { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string UserRole { get; set; }

    }
}
