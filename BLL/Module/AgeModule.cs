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
   public static class AgeModule
    {
        public static List<AGE_DTO> GetAllAgeRange()
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                var AgeRangeList = AgeCRUD.GetAllAgeRange(ctx);
                List<AGE_DTO> ages = new List<AGE_DTO>();
                foreach (var age in AgeRangeList)
                {
                    ages.Add(AGE_Casting.CastToDTO(age));
                }
                return ages;
            }
        }
    }
}
