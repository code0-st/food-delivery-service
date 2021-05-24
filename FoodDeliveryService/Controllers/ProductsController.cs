using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodDeliveryService;
using Microsoft.AspNetCore.Authorization;

namespace FoodDeliveryService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly FoodDeliveryServiceContext _context;

        public ProductsController(FoodDeliveryServiceContext context)
        {
            _context = context;
        }

        // GET: api/Products/?catalogId=2
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts(int catalogId, string searchValue)
        {
            if (catalogId == 0)
            {
                if(searchValue == null)
                {
                    return await _context.Products.ToListAsync();
                }
                else
                {
                    return await _context.Products
                        .Where(p => p.Name.Contains(searchValue))
                        .ToListAsync();
                }
            } else
            {
                if(searchValue == null)
                {
                    return await _context.Products
                        .Where(p => p.CatalogId == catalogId)
                        .ToListAsync();
                }
                else
                {
                    return await _context.Products
                        .Where(p => p.CatalogId == catalogId && p.Name.Contains(searchValue))
                        .ToListAsync();
                }
            }
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
