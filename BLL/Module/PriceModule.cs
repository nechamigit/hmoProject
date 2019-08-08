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
  public static class PriceModule
    {
        public static PRICE_DTO getPricetById(int id)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                return priceCRUD.ReadById(ctx, id);
            }

        }
        public static PRICE GetProductPrice(PRODUCTS_TBL product)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {

                var productdetail = ProductsCRUD.ReadById(ctx, product.productId);
                if (productdetail != null)
                {
                    PRICE price = ctx.PRICEs.Where(u => u.productId == product.productId).FirstOrDefault();
                    return price;
                }
                return null;
            }
        }

    }
}
