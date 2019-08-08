using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
     public class REQUEST_DTO
    {
        public USERS_DTO user { get; set; }
        public int userId { get; set; }
        public string categoryName { get; set; }
        public bool parentCategory { get; set; }
        public Nullable<int> requestStatus { get; set; }
        public int requestKind { get; set; }
        public int categoryId { get; set; }
        public int requestId { get; set; }
        public USERS_DTO User { get; set; }
    }
}
