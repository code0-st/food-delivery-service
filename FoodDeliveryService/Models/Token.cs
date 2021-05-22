using System;

namespace FoodDeliveryService
{
    public class Token
    {
        public int Id { get; set; }
        public string TokenValue { get; set; }
        public Guid UserId { get; set; }
    }
}
