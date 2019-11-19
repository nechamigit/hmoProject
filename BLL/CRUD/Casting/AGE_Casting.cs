using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL.Casting
{
    public  class AGE_Casting
    {
        public static AGE_DTO CastToDTO(AGE_TBL a)
        {
            return new AGE_DTO() { ageId = a.ageId, begins = a.begins, ends = a.ends };
        }
        public static AGE_TBL CastToDAL(AGE_DTO a)
        {
            return new AGE_TBL() { ageId = a.ageId, begins = a.begins, ends = a.ends };
        }
    }
}
