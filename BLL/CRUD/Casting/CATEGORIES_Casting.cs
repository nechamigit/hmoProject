using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BLL.Casting
{
    class CATEGORIES_Casting
    {
        static HMO_PROGECTEntities db = new HMO_PROGECTEntities();
        public static CATEGORIES_DTO CastToDTO(CATEGORIES_TBL a)
        {
            return new CATEGORIES_DTO
            {
                categoryId = a.categoriesId,
                categoryName = a.categoryName,
                //parentCategory= a.parentCategory.Value
             
            };
        }
        public static CATEGORIES_TBL CastToTBL(CATEGORIES_DTO a)
        {
            return new CATEGORIES_TBL
            {
                categoriesId = a.categoryId,
                categoryName = a.categoryName,
                parentCategory = a.parentCategory,
       
            };
        }
    }
}