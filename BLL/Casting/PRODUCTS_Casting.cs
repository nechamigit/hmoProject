using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using BLL;
using DTO;
namespace BLL.Casting
{
    class PRODUCTS_Casting
    {
        static HMO_PROGECTEntities db = new HMO_PROGECTEntities();
        public static PRODUCTS_DTO CastToDTO(PRODUCTS_TBL a)
        {
            return new PRODUCTS_DTO
            {
                productId = a.productId,
                description = a.description,
                categoryId = a.categoryId,
                imag=a.imag,
                name=a.name

               
            };

        }
        public static PRODUCTS_TBL CastToTBL(PRODUCTS_DTO a)
        {
            return new PRODUCTS_TBL
            {
                productId = a.productId,
                description = a.description,
                categoryId = a.categoryId,
                //CATEGORIES_TBL = db.CATEGORIES_TBL.Where(S => S.categoriesId == a.categoryId).FirstOrDefault(),
                imag=a.imag,
                name=a.name
               

            };
        }
    }
}