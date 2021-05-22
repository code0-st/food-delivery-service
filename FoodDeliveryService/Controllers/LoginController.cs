using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace FoodDeliveryService.Controllers
{
    [Route("login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly FoodDeliveryServiceContext _context;

        private bool userExisted = false;

        public LoginController(FoodDeliveryServiceContext context)
        {
            _context = context;
        }

        private void CheckUserInToken(User user, ref bool userExisted)
        {
            var token = _context.Tokens.FirstOrDefault(t => t.UserId == user.Id);
            if (token != null)
            {
                userExisted = true;
            }
        }

        [HttpPost]
        public ActionResult Login([FromBody] Login login)
        {
            var identify = GetIdentity(login.Username, login.Password);
            if (identify == null)
            {
                return BadRequest(new { errorText = "Неверный логин или пароль" });
            }
            var now = DateTime.UtcNow;
            // создаем токен
            var jwt = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                notBefore: now,
                claims: identify.Claims,
                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME_MINITE)),
                signingCredentials: new SigningCredentials(
                    AuthOptions.GetSymmetricSecurityKey(),
                    SecurityAlgorithms.HmacSha256));
            var encodeJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            User user = _context.Users.FirstOrDefault(u => u.UserName == login.Username);
            CheckUserInToken(user, ref this.userExisted);

            if (userExisted)
            {
                var currentToken = _context.Tokens.First(t => t.UserId == user.Id);
                currentToken.TokenValue = encodeJwt;
            }
            else
            {
                _context.Tokens.Add(new Token
                {
                    TokenValue = encodeJwt,
                    UserId = user.Id,
                });
            }
            _context.SaveChanges();
            return Ok(
            new
            {
                access_token = encodeJwt,
                username = identify.Name,
                userRole = user.UserRole,
                id = user.Id,
            });
        }

        private ClaimsIdentity GetIdentity(string username, string password)
        {
            var hash = new HashPasswordOprions(password);
            string userPasHash = hash.GetHashString();

            var user = _context.Users.FirstOrDefault(u => u.UserName == username && u.Password == userPasHash);

            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.UserName),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, user.UserRole),
                };



                ClaimsIdentity claimsIdentity = new ClaimsIdentity(
                    claims,
                    "Token",
                    ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }
            return null;
        }
    }
}
