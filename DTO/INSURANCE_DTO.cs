using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public  class INSURANCE_DTO
    {
        public int insuranceId { get; set; }
        public int hmoId { get; set; }
        public string insuranceName { get; set; }
        public Nullable<double> InsurancePrice { get; set; }
        public string description { get; set; }

    }
}
