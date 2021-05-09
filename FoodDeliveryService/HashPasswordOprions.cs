using System;
using System.Security.Cryptography;
using System.Text;

namespace FoodDeliveryService
{
    public class HashPasswordOprions
    {
        public string sourceData;
        private byte[] tmpSource;
        private byte[] tmpHash;

        public HashPasswordOprions(string _sourceData)
        {
            this.sourceData = _sourceData;
            this.tmpSource = Encoding.ASCII.GetBytes(_sourceData);
            this.tmpHash = new SHA256CryptoServiceProvider().ComputeHash(this.tmpSource);
        }

        public string GetHashString()
        {
            int i;
            StringBuilder output = new StringBuilder(this.tmpHash.Length);
            for (i = 0; i < this.tmpHash.Length-1; i++)
            {
                output.Append(this.tmpHash[i].ToString("X2"));
            }
            return output.ToString();
        }

        //public static bool CheckEquals(User user) 
        //{ 
        //    byte[] userHash = new SHA256CryptoServiceProvider().De

        //}
    }
}
