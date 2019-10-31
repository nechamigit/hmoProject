using BLL.CRUD;
using BLL.Module;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("products")]
    public class ProductsController : ApiController
    {
        [HttpGet]
        [Route("readById/{id}")]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                return Ok(ProductsModule.getProductsById(id));
            }
            catch (Exception e)
            {

                return InternalServerError();
            }
        }
        [HttpPost]
        [Route("Delete")]
        public IHttpActionResult Delete(PRODUCTS_DTO product)
        {
            try
            {
                ProductsCRUD.Delete(product);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
            [HttpPost]
        [Route("Create")]
        public IHttpActionResult addProduct(PRODUCTS_DTO product)
        {
            try
            {
                ProductsCRUD.Create(product);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }

        }
        [HttpGet]
        [Route("getProductByKriterion")]
        public IHttpActionResult getProductByKriterion(int productId)
        {
            try
            {
                ProductsModule.getProductByKriterion(productId);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }

        }
        [HttpGet]
        [Route("GetProductInsurance")]
        public IHttpActionResult GetProductInsurance(PRODUCTS_TBL product)
        {
            try
            {
                InsuranceModule.GetProductInsurance(product);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }

        }
        [HttpGet]
        [Route("GetHmoByProduct")]
        public IHttpActionResult GetHmoByProduct(PRODUCTS_TBL product)
        {
            try
            {
                HmoModule.GetHmoByProduct(product);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }

        }

        [HttpGet]
        [Route("GetAll/{id}")]
        public IHttpActionResult GetAll(int id)
        {
            try
            {
                using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
                {

                    ProductsModule.getProductByKriterion(id);
                }
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }

        }
    }
}
