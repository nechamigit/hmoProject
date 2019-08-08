using BLL.CRUD;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Module
{
   public static class InsuranceModule
    {
        public static INSURANCE_TBL GetProductInsurance(PRODUCTS_TBL product)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                var productdetail = ProductsCRUD.ReadById(ctx, product.productId);
                if (productdetail != null)
                {
                    PRICE price = ctx.PRICEs.Where(u => u.productId == product.productId).FirstOrDefault();
                    INSURANCE_TBL insurance = ctx.INSURANCE_TBL.Where(u => u.insuranceId == price.insuranceId).FirstOrDefault();
                    return insurance;
                }
                return null;
            }
        }
        public static double? getInsurancePrice(INSURANCE_TBL insurance)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
               var selectedInsurance= InsuranceCRUD.Read( insurance.insuranceId);
                if(selectedInsurance!=null)
                {
                    return selectedInsurance.InsurancePrice;
                }

                return null;
            }
              
        }

    }
}
