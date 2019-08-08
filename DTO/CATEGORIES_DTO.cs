using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
     public class CATEGORIES_DTO
    {
        public int categoryId { get; set; }
        //public int hmoId { get; set; }
        public string categoryName { get; set; }
        public int parentCategory { get; set; }
        
    }
}
 