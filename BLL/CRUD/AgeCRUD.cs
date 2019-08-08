using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.CRUD
{
   public class AgeCRUD
    {//readList
        public static List<AGE_TBL> GetAllAgeRange(HMO_PROGECTEntities ctx)
        {
            return ctx.AGE_TBL.ToList();
        }
    }
}
