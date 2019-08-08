using BLL.models;
using BLL.Module;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BLL.CRUD;
using DTO;
namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    [RoutePrefix("Category")]
    public class CategoryController : ApiController
    {
        [HttpGet]
        [Route("GetAll")]
        public List<CATEGORIES_DTO> GetAllCategories()
        {
            return CategoryModule.GetAllCategories();
        }

        [HttpGet]
        [Route("GetById/{id}")]
        public CategoryDetails GetCategoryById(int id)
        {
            return CategoryModule.GetCategoryDetailsById(id);
        }
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult addCategory(CATEGORIES_DTO category)
        {
            try
            {
                CategoryCRUD.Create(category);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }

        }
        [HttpGet]
        [Route("GetAllSubCategory/{id}")]
        public IHttpActionResult GetProductPrice(int id)
        {
            try
            {
                
                return Ok(CategoryModule.GetAllSubCategory(id));
            }
            catch (Exception)
            {
                return InternalServerError();
            }

        }
    }
}
