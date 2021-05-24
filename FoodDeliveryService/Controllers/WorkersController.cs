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
    public class WorkersController : ControllerBase
    {
        private readonly FoodDeliveryServiceContext _context;

        public WorkersController(FoodDeliveryServiceContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Worker>>> GetWorkers(string searchValue)
        {
            if (searchValue == null)
            {
                return await _context.Workers
                .Include(w => w.Department)
                .Include(w => w.Position)
                .ToListAsync();
            } else
            {
                return await _context.Workers
                    .Where(w => w.FirstName == searchValue
                             || w.LastName == searchValue
                             || w.Patronymic == searchValue
                             || w.UserName == searchValue)
                    .Include(w => w.Department)
                    .Include(w => w.Position)
                    .ToListAsync();
            } 
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<Worker>> GetWorker(Guid id)
        {
            var worker = await _context.Workers.FindAsync(id);

            if (worker == null)
            {
                return NotFound();
            }

            worker.Department = _context.Departments.Find(worker.DepartmentId);
            worker.Position = _context.Positions.Find(worker.PositionId);

            return worker;
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorker(Guid id, Worker worker)
        {
            if (id != worker.Id)
            {
                return BadRequest();
            }

            _context.Entry(worker).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkerExists(id))
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

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Worker>> PostWorker(Worker worker)
        {
            var hash = new HashPasswordOprions(worker.Password);
            string userPasHash = hash.GetHashString();

            _context.Workers.Add(new Worker 
            {
                FirstName = worker.FirstName,
                LastName = worker.LastName,
                Patronymic = worker.Patronymic,
                UserName = worker.UserName,
                Password = userPasHash,
                Phone = worker.Phone,
                UserRole = "worker",
                DepartmentId = worker.DepartmentId,
                PositionId = worker.PositionId,
                WorkPhone = worker.WorkPhone,
                Id = Guid.NewGuid()
            });
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (WorkerExists(worker.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetWorker", new { id = worker.Id }, worker);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorker(Guid id)
        {
            var worker = await _context.Workers.FindAsync(id);
            if (worker == null)
            {
                return NotFound();
            }

            _context.Workers.Remove(worker);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WorkerExists(Guid id)
        {
            return _context.Workers.Any(e => e.Id == id);
        }
    }
}
