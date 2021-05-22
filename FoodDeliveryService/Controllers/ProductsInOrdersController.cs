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
    public class ProductsInOrdersController : ControllerBase
    {
        private readonly FoodDeliveryServiceContext _context;

        public ProductsInOrdersController(FoodDeliveryServiceContext context)
        {
            _context = context;
        }

        // GET: api/ProductsInOrders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductsInOrder>>> GetProductsInOrders()
        {
            return await _context.ProductsInOrders.ToListAsync();
        }

        // GET: api/ProductsInOrders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductsInOrder>> GetProductsInOrder(int id)
        {
            var productsInOrder = await _context.ProductsInOrders.FindAsync(id);

            if (productsInOrder == null)
            {
                return NotFound();
            }

            return productsInOrder;
        }

        // PUT: api/ProductsInOrders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductsInOrder(int id, ProductsInOrder productsInOrder)
        {
            if (id != productsInOrder.Id)
            {
                return BadRequest();
            }

            _context.Entry(productsInOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductsInOrderExists(id))
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

        // POST: api/ProductsInOrders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProductsInOrder>> PostProductsInOrder(List<ProductsInOrder> productsInOrder)
        {
            _context.ProductsInOrders.AddRange(productsInOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductsInOrder", new { id = productsInOrder[0].Id }, productsInOrder);
        }

        // DELETE: api/ProductsInOrders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductsInOrder(int id)
        {
            var productsInOrder = await _context.ProductsInOrders.FindAsync(id);
            if (productsInOrder == null)
            {
                return NotFound();
            }

            _context.ProductsInOrders.Remove(productsInOrder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductsInOrderExists(int id)
        {
            return _context.ProductsInOrders.Any(e => e.Id == id);
        }
    }
}
