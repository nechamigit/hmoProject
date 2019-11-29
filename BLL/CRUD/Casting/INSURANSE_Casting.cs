using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL.Casting
{
   class INSURANSE_Casting
    {
       static HMO_PROGECTEntities db = new HMO_PROGECTEntities();
        public static INSURANCE_DTO CastToDTO(INSURANCE_TBL a)
        {
            return new INSURANCE_DTO
            {
                insuranceId = a.insuranceId,
                insuranceName = a.insuranceName,
                hmoId = a.hmoId,
                description=a.description,
                InsurancePrice= a.InsurancePrice
              
            };
        }
        public static INSURANCE_TBL CastToTBL(INSURANCE_DTO a)
        {
            return new INSURANCE_TBL
            {
                insuranceId = a.insuranceId,
                insuranceName = a.insuranceName,
                hmoId = a.hmoId,
                InsurancePrice=a.InsurancePrice,
                description=a.description,
                HMO_TBL = db.HMO_TBL.Where(s => s.hmoId == a.hmoId).FirstOrDefault()
            };
        }
    }
}
