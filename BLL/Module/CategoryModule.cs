using BLL.Casting;
using BLL.CRUD;
using BLL.models;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Module
{
    public static class CategoryModule
    {
        public static List<CATEGORIES_DTO> GetAllCategories()
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                var categoriesList=CategoryCRUD.GetAllCategories(ctx);
                List<CATEGORIES_DTO> categories = new List<CATEGORIES_DTO>();
                foreach (var category in categoriesList)
                {
                    categories.Add(CATEGORIES_Casting.CastToDTO(category));
                }
                return categories;
            }
        }

        public static CategoryDetails GetCategoryDetailsById(int id)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                var categoryDetails = new CategoryDetails();
                var category=CategoryCRUD.GetCategoryById(ctx, id);
                if(category!=null)
                {
                    categoryDetails.Id = category.categoriesId;
                    categoryDetails.Name = category.categoryName;
                    var productList = ProductsCRUD.GetProductByCategoryId(ctx, id);
                    foreach (var product in productList)
                    {
                        categoryDetails.ProductsList.Add(product);
                    }
                    return categoryDetails;
                }
                return null;
            }
        }
        public static List<CATEGORIES_DTO> GetAllSubCategory(int id)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                var categoriesList = CategoryCRUD.GetAllCategories(ctx);
                var subCategoryList = categoriesList.Where(u => u.parentCategory == id).ToList();
                List<CATEGORIES_DTO> categories = new List<CATEGORIES_DTO>();

                foreach (var category in subCategoryList)
                {
                    categories.Add(CATEGORIES_Casting.CastToDTO(category));
                }
                return categories;

            }

        }
    }
}
