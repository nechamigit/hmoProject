using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
     public class USERS_DTO
    {
        public int userId { get; set; }
        public string userName { get; set; }
        public string tz { get; set; }
        public string password { get; set; }
        public int hmoId { get; set; }
        public bool isAdmin { get; set; }
        public string adress { get; set; }
        public string mail { get; set; }
        public string telephone { get; set; }
        public string requestForm { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public Nullable<bool> isConfirm { get; set; }
        public Nullable<bool> isActive { get; set; }
    }
}
