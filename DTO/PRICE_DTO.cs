using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
     public class PRICE_DTO
    {
        public int priceId { get; set; }
        public Nullable<double> priceText { get; set; }
        public int productId { get; set; }
        public int insuranceId { get; set; }
        public Nullable<int> ageId { get; set; }
        public Nullable<double> discount { get; set; }
    }
}
