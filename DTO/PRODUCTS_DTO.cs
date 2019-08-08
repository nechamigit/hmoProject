using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class PRODUCTS_DTO
    {
        public int productId { get; set; }
        public string description { get; set; }
        public int categoryId { get; set; }
        public Nullable<int> priceId { get; set; }
        public string imag { get; set; }
        public string name { get; set; }

    }
}
