using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.CRUD
{
    public static class ProductsCRUD
    {
        public static HMO_PROGECTEntities ctx;
        //readByCategoryId
        public static List<PRODUCTS_DTO> GetProductByCategoryId(HMO_PROGECTEntities ctx, int categoryId)
        {
            var list = ctx.PRODUCTS_TBL.Where(i => i.categoryId == categoryId).ToList();
            var dtoL = new List<PRODUCTS_DTO>();
            list.ForEach(f => {
                dtoL.Add(Casting.PRODUCTS_Casting.CastToDTO(f));
            });
            return dtoL;
        }
        //readById
        public static PRODUCTS_DTO ReadById(HMO_PROGECTEntities ctx, int id)
        {
            return ctx.PRODUCTS_TBL.Where(u => u.productId == id).ToList()
                .Select(u => Casting.PRODUCTS_Casting.CastToDTO(u))
                .FirstOrDefault();
        }
        //read
        public static List<PRODUCTS_TBL> GetAllProducts(HMO_PROGECTEntities ctx)
        {
            return ctx.PRODUCTS_TBL.ToList();
        }
        //create
        public static int Create(PRODUCTS_DTO product)
        {
			using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
			{
				// ctx.PRODUCTS_TBL.Add(new PRODUCTS_TBL { name = product.name, description = product.description, categoryId = product.categoryId });
				PRODUCTS_TBL newProduct = new PRODUCTS_TBL()
				{
					name = product.name,
					description = product.description,
					categoryId = product.categoryId,
					imag=product.imag
				};
				ctx.PRODUCTS_TBL.Add(newProduct);
				ctx.SaveChanges();
				var lastProduct = ctx.PRODUCTS_TBL.LastOrDefault();
				return lastProduct.productId;
			}

        }
        //delete
        public static void Delete(PRODUCTS_DTO product)
        {
            ctx.PRODUCTS_TBL.Remove(ctx.PRODUCTS_TBL.FirstOrDefault(u=>u.productId==product.productId));
            ctx.SaveChanges();
        }

    }
}

