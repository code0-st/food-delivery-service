using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace FoodDeliveryService
{
    public class AuthOptions
    {
        public const string ISSUER = "AuthServer";
        public const string AUDIENCE = "FoodDeliveryService";
        private const string KEY = "superSecretKey234@ru";
        public const int LIFETIME_MINITE = 4320; // время жизни токена
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}