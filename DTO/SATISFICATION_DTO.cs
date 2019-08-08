using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
     public class SATISFICATION_DTO
    {
        public int satisficationId { get; set; }
        public int hmoId { get; set; }
        public Nullable<double> satisficationOfWebsite { get; set; }
        public Nullable<double> satisficationOfHmo { get; set; }
        public Nullable<int> userId { get; set; }
        public string comment { get; set; }
        public Nullable<System.DateTime> date { get; set; }

    }
}
