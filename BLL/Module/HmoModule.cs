using BLL.Casting;
using BLL.CRUD;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Module
{
    public static class HmoModule
    {
        //public static List<HMO_TBL> GetAllHmos()
        //{
        //    using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
        //    {
        //        return HmoCRUD.GetAllHmos(ctx);
        //    }
        //}
        public static List<HMO_DTO> GetAllHmo()
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                var hmoList = HmoCRUD.GetAllHmos(ctx);
                List<HMO_DTO> hmos = new List<HMO_DTO>();
                foreach (var hmo in hmoList)
                {
                    hmos.Add(HMO_Casting.CastToDTO(hmo));
                }
                return hmos;
            }
        }
        //read user by hmo:
        public static HMO_TBL ReadUserByHmo(USERS_TBL user)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                HMO_TBL hmo = ctx.HMO_TBL.Where(u => u.hmoId == user.hmoId).FirstOrDefault();
                return hmo;
            
            }
            
        }
        public static HMO_TBL GetHmoByProduct(PRODUCTS_TBL product)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                INSURANCE_TBL insurance = InsuranceModule.GetProductInsurance(product);
                if (insurance != null)
                {
                    HMO_TBL hmo = ctx.HMO_TBL.Where(u => u.hmoId == insurance.hmoId).FirstOrDefault();
                }
                return null;
            }
        }
    }
}

