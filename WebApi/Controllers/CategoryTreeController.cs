using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApi.Models;

namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("CategoryTree")]
    public class CategoryTreeController : ApiController
    {
        [HttpGet]
        //[Route("get")]
        public List<CategoryTree> GetCategoryTree()
        {
            using (HMO_PROGECTEntities db = new HMO_PROGECTEntities())
            {
                List<CategoryTree> CategoryTreeList = new List<CategoryTree>();
                CategoryTree categoryTree = new CategoryTree()
                {
                    id = 0,
                    name = "קטגוריות",
                    children = new List<CategoryTree>()
                };
                var allCategoriesList = db.CATEGORIES_TBL.ToList();
                AddChildernForNode(db, categoryTree, allCategoriesList);
                CategoryTreeList.Add(categoryTree);
                return CategoryTreeList;
            }

        }

        private static void AddChildernForNode(HMO_PROGECTEntities db, CategoryTree categoryTree, List<CATEGORIES_TBL> allCategoriesList)
        {
            foreach (var item in allCategoriesList.Where(i => i.parentCategory == categoryTree.id).ToList())
            {
                var category = new CategoryTree()
                {
                    id = item.categoriesId,
                    name = item.categoryName,
                    children = new List<CategoryTree>()
                };
                AddChildernForNode(db, category, allCategoriesList);
                categoryTree.children.Add(category);

            }
        }


    }
}
