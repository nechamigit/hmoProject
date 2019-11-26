using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BLL.Casting
{
    class SATISFICATION_Casting
    {
        static HMO_PROGECTEntities db = new HMO_PROGECTEntities();
        public static SATISFICATION_DTO CastToDTO(SATISFICATION_TBL a)
        {
            return new SATISFICATION_DTO
            {
                satisficationId = a.satisficationId,
                satisficationOfHmo = a.satisficationOfHmo,
                satisficationOfWebsite = a.satisficationOfWebsite,
                date = a.date,
                comment = a.comment,
                hmoId = a.hmoId,
                userId = a.userId,
            };
        }
        public static SATISFICATION_TBL CastToTBL(SATISFICATION_DTO a)
        {
            return new SATISFICATION_TBL
            {
                satisficationId = a.satisficationId,
                satisficationOfHmo = a.satisficationOfHmo,
                satisficationOfWebsite = a.satisficationOfWebsite,
                date = a.date,
                comment = a.comment,
                hmoId = a.hmoId,
                userId = a.userId,
                HMO_TBL = db.HMO_TBL.Where(s => s.hmoId == a.hmoId).FirstOrDefault(),
            };
        }
    }
}
