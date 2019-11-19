using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL.Casting
{
    class HMO_Casting
    {
        public static HMO_DTO CastToDTO(HMO_TBL a)
        {
            return new HMO_DTO
            {
                hmoId = a.hmoId,
                hmoMail = a.hmoMail,
                hmoName = a.hmoName
            };

        }
        public static HMO_TBL CastToTBL(HMO_DTO a)
        {
            return new HMO_TBL {
                hmoId = a.hmoId,
                hmoName = a.hmoName,
                hmoMail = a.hmoMail
            };
        }
        
    }
}
