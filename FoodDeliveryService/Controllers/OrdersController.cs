using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodDeliveryService;
using Microsoft.AspNetCore.Authorization;
using System.Text.Json;

namespace FoodDeliveryService.Controllers
{
    [Route("api/[controller]")]
    [Route("api/[controller]/search")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly FoodDeliveryServiceContext _context;

        public OrdersController(FoodDeliveryServiceContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders(Guid clientId)
        {
            var orders = new List<Order>();
            if (clientId.ToString() != "00000000-0000-0000-0000-000000000000")
            {
                orders = _context.Orders
                    .Where(o => o.ClientId == clientId)
                    .Include(o => o.Client)
                    .Include(o => o.Status)
                    .Include(o => o.PicUpPoint)
                    .Include(o => o.ProductsInOrders)
                    .ToList();
            }
            else
            {
                orders = _context.Orders
                .Include(o => o.Client)
                .Include(o => o.Status)
                .Include(o => o.PicUpPoint)
                .Include(o => o.ProductsInOrders)
                .ToList();
            }

            foreach (var order in orders)
            {
                order.Client = new Client 
                {
                    Id = order.Client.Id,
                    FirstName = order.Client.FirstName,
                    LastName = order.Client.LastName,
                    Patronymic = order.Client.Patronymic,
                    Phone = order.Client.Phone,
                    UserName = order.Client.UserName,
                    Address = order.Client.Address
                };
                foreach (var product in order.ProductsInOrders)
                {
                    product.Product = _context.Products.Find(product.ProductId);
                }
            }

            return orders;
        }

        [Authorize]
        [HttpGet("sort")]
        public async Task<ActionResult<IEnumerable<Order>>> Sort(bool isAsc = true, OrdersSortState sortState = OrdersSortState.Id)
        {
            var orders = _context.Orders
                    .Include(o => o.Client)
                    .Include(o => o.Status)
                    .Include(o => o.PicUpPoint)
                    .Include(o => o.ProductsInOrders)
                    .ToList();

            if(sortState == OrdersSortState.Id)
            {
                orders = isAsc
                    ? orders.OrderBy(o => o.Id).ToList() 
                    : orders.OrderByDescending(o => o.Id).ToList();
            } else if (sortState == OrdersSortState.DateCreated)
            {
                orders = isAsc
                     ? orders.OrderBy(o => o.DateCreated).ToList()
                     : orders.OrderByDescending(o => o.DateCreated).ToList();
            } else
            {
                orders = isAsc
                    ? orders.OrderBy(o => o.Status.Name).ToList()
                    : orders.OrderByDescending(o => o.Status.Name).ToList();
            }

            foreach (var order in orders)
            {
                order.Client = new Client
                {
                    Id = order.Client.Id,
                    FirstName = order.Client.FirstName,
                    LastName = order.Client.LastName,
                    Patronymic = order.Client.Patronymic,
                    Phone = order.Client.Phone,
                    UserName = order.Client.UserName,
                    Address = order.Client.Address
                };
                foreach (var product in order.ProductsInOrders)
                {
                    product.Product = _context.Products.Find(product.ProductId);
                }
            }

            return orders;
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
        [Authorize]
        [HttpPost]
        public int PostOrder(Order order)
        {
            DateTime now = DateTime.Now;

            _context.Orders.Add(new Order 
            {
                ClientId = order.ClientId,
                StatusId = 1, // Принят в обаботку
                DateCreated = now
            });
            _context.SaveChanges();

            int currentOrderId = _context.Orders
                .Where(o => o.ClientId == order.ClientId && o.DateCreated == now)
                .Select(o => o.Id)
                .FirstOrDefault();

            return currentOrderId;
        }

        [Authorize]
        [HttpPost("status")]
        public async Task<IActionResult> SetOrderStatus([FromBody] SetOrderStatus content)
        {
            var order = await _context.Orders.FindAsync(content.Id);
            if (order == null)
            {
                return NotFound();
            }
            order.StatusId = content.StatusId;
            order.Status = _context.OrderStatuses.Find(content.StatusId);
            if (content.StatusId == 5)  // Заказ закрыт
            {
                order.DateClosed = DateTime.Now;
            }
            _context.Entry(order).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
            }
            return NoContent();
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
