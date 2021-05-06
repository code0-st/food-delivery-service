using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodDeliveryService;

namespace FoodDeliveryService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly FoodDeliveryServiceContext _context;

        public OrdersController(FoodDeliveryServiceContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            //var orders = from o in _context.Orders
            //             join cl in _context.Clients on o.ClientId equals cl.Id
            //             join st in _context.OrderStatuses on o.StatusId equals st.Id
            //             join pi in _context.PicUpPoints on o.PicUpPointId equals pi.Id
            //             select new Order
            //             {
            //                 Id = o.Id,
            //                 DateCreated = o.DateCreated,
            //                 DateClosed = o.DateClosed,
            //                 ClientId = o.ClientId,
            //                 PicUpPointId = o.PicUpPointId,
            //                 StatusId = o.StatusId,
            //                 Client = new Client
            //                 {
            //                     Id = o.ClientId,
            //                     FirstName = cl.FirstName,
            //                     LastName = cl.LastName,
            //                     Patronymic = cl.Patronymic,
            //                     UserName = cl.UserName,
            //                     Age = cl.Age,
            //                     Phone = cl.Phone,
            //                     Address = cl.Address,
            //                     DiscountId = cl.DiscountId,
            //                 },
            //                 Status = new OrderStatus
            //                 {
            //                     Id = o.StatusId,
            //                     Name = st.Name,
            //                 }
            //             };
            //var orders = _context.Orders.ToList();
            //foreach (Order order in orders)
            //{
            //    order.Client = _context.Clients.Find(order.ClientId);
            //    order.Status = _context.OrderStatuses.Find(order.StatusId);
            //    order.PicUpPoint = _context.PicUpPoints.Find(order.PicUpPointId);
            //}
            return await _context.Orders.ToListAsync();
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        // PUT: api/Orders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(int id, Order order)
        {
            if (id != order.Id)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Orders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderExists(int id)
        {
            return _context.Orders.Any(e => e.Id == id);
        }
    }
}
