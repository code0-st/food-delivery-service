namespace FoodDeliveryService
{
    public partial class Worker : User
    {
        public string WorkPhone { get; set; }

        public int DepartmentId { get; set; }
        public int PositionId { get; set; }
        public virtual Department Department { get; set; }
        public virtual Position Position { get; set; }
    }
}
