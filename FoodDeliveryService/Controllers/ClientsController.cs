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
    public class ClientsController : ControllerBase
    {
        private readonly FoodDeliveryServiceContext _context;

        public ClientsController(FoodDeliveryServiceContext context)
        {
            _context = context;
        }

        // GET: api/Clients
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Client>>> GetClients(string searchValue)
        {
            if(searchValue == null)
            {
                return await _context.Clients.ToListAsync();
            }
            else
            {
                return await _context.Clients
                    .Where(c => c.FirstName.Contains(searchValue)
                             || c.LastName.Contains(searchValue)
                             || c.Patronymic.Contains(searchValue)
                             || c.UserName.Contains(searchValue))
                    .ToListAsync();
            }
        }
        [Authorize]
        [HttpGet("sort")]
        public async Task<ActionResult<IEnumerable<Client>>> GetSortedClients(bool isAsc = true, ClientsSortState sortState = ClientsSortState.LastName)
        {
            var clients = _context.Clients.ToList();

            if(sortState == ClientsSortState.LastName)
            {
                clients = isAsc
                    ? clients.OrderBy(c => c.LastName).ToList()
                    : clients.OrderByDescending(c => c.LastName).ToList();
            } else
            {
                clients = isAsc
                    ? clients.OrderBy(c => c.FirstName).ToList()
                    : clients.OrderByDescending(c => c.FirstName).ToList();
            }
            return clients;
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(Guid id)
        {
            var client = await _context.Clients.FindAsync(id);

            if (client == null)
            {
                return NotFound();
            }

            return client;
        }

        // PUT: api/Clients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClient(Guid id, Client client)
        {
            if (id != client.Id)
            {
                return BadRequest();
            }

            _context.Entry(client).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(id))
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

        // POST: api/Clients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            var hash = new HashPasswordOprions(client.Password);
            string userPasHash = hash.GetHashString();

            _context.Clients.Add(new Client 
            {
                FirstName = client.FirstName,
                LastName = client.LastName,
                Patronymic = client.Patronymic,
                UserName = client.UserName,
                Password = userPasHash,
                Phone = client.Phone,
                UserRole = "client",
                Id = Guid.NewGuid(),
                DiscountId = client.DiscountId,
                Address = client.Address,
            });
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ClientExists(client.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetClient", new { id = client.Id }, client);
        }

        // DELETE: api/Clients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient(Guid id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }

            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClientExists(Guid id)
        {
            return _context.Clients.Any(e => e.Id == id);
        }
    }
}
