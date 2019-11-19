using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL.Casting
{
    class PRICE_Casting
    {
        static HMO_PROGECTEntities db = new HMO_PROGECTEntities();
        public static PRICE_DTO CastToDTO(PRICE a)
        {

            return new PRICE_DTO
            {
               priceText=a.priceText,
                priceId = a.priceId,
                productId=a.productId,
                ageId = a.ageId,
                discount = a.discount,
                insuranceId = a.insuranceId
            };

        }
        public static PRICE CastToTBL(PRICE_DTO a)
        {
            return new PRICE
            {
               productId=a.productId,
                priceId = a.priceId,
                priceText = a.priceText,
                ageId = a.ageId,
                discount = a.discount,
                insuranceId = a.insuranceId,
                //CATEGORIES_TBL = db.CATEGORIES_TBL.Where(s => s.categoriesId == a.categoryId).FirstOrDefault(),
                INSURANCE_TBL = db.INSURANCE_TBL.Where(Y => Y.insuranceId == a.insuranceId).FirstOrDefault()
            };
        }
    }
}

