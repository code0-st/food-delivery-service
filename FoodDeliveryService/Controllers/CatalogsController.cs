using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoodDeliveryService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogsController : ControllerBase
    {
        private readonly FoodDeliveryServiceContext _context;

        public CatalogsController(FoodDeliveryServiceContext context)
        {
            _context = context;
        }

        // GET: api/Catalogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Catalog>>> GetCatalogs(string searchValue)
        {
            if(searchValue == null)
            {
                return await _context.Catalogs.ToListAsync();
            } else
            {
                return await _context.Catalogs.Where(c => c.Name.Contains(searchValue)).ToListAsync();
            }
        }

        // GET: api/Catalogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Catalog>> GetCatalog(int id)
        {
            var catalog = await _context.Catalogs.FindAsync(id);

            if (catalog == null)
            {
                return NotFound();
            }

            return catalog;
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult<Catalog>> PutCatalog(int id, Catalog catalog)
        {
            if (id != catalog.Id)
            {
                return BadRequest();
            }

            _context.Entry(catalog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CatalogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCatalog", new { id = catalog.Id }, catalog);
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Catalog>> PostCatalog(Catalog catalog)
        {
            _context.Catalogs.Add(catalog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCatalog", new { id = catalog.Id }, catalog);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCatalog(int id)
        {
            var catalog = await _context.Catalogs.FindAsync(id);
            if (catalog == null)
            {
                return NotFound();
            }

            _context.Catalogs.Remove(catalog);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CatalogExists(int id)
        {
            return _context.Catalogs.Any(e => e.Id == id);
        }
    }
}
