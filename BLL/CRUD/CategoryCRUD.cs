using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BLL.CRUD
{
    public static class CategoryCRUD
    {
        static HMO_PROGECTEntities ctx = new HMO_PROGECTEntities();

       static CATEGORIES_TBL add_categories = new CATEGORIES_TBL();
        static PRODUCTS_TBL product = new PRODUCTS_TBL();
        //static PRICE price = new PRICE();
        //Create
        public static void Create(CATEGORIES_DTO category)
        {
            ctx.CATEGORIES_TBL.Add(new CATEGORIES_TBL { categoryName =category.categoryName , parentCategory =category.parentCategory });
            //product=db.PRODUCTS_TBL.Add(new PRODUCTS_TBL { categoryId = add_categories.categoriesId, description = description });
            //db.PRICE.Add(new PRICE { discount = discount, productId = product.productId, priceText = price });
            ctx.SaveChanges();
        }

        //Read
        public static List<CATEGORIES_TBL> GetAllCategories(HMO_PROGECTEntities ctx)
        {
            return ctx.CATEGORIES_TBL.ToList();
        }

        //Read by Id
        public static CATEGORIES_TBL GetCategoryById(HMO_PROGECTEntities ctx,int id)
        {
            return ctx.CATEGORIES_TBL.Where(i => i.categoriesId == id).FirstOrDefault();
        }

            //Update

        //Delete
        public static void deleteCategory(CATEGORIES_TBL category)
        {
            ctx.CATEGORIES_TBL.Remove(ctx.CATEGORIES_TBL.FirstOrDefault(u=>u.categoriesId==category.categoriesId));
            ctx.SaveChanges();
        }
       
    }
}
