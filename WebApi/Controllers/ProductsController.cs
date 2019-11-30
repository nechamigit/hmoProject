using BLL.CRUD;
using BLL.Module;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using static BLL.Module.ProductsModule;

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
                var id = ProductsCRUD.Create(product);
                return Ok(id);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
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
        [Route("getProductByKriterionAndAge")]
        public List<ProductPrices> getProductByKriterionAndAge(int productId, int subItem)
        {
            return ProductsModule.getProductByKriterionAndAge(productId, subItem);
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
        [Route("upLowadPhotos")]
        [HttpPost]
        public HttpResponseMessage UploadFile(string id)
        {
            var pathToSql = " http://localhost:58516/UploadFiles/ ";
            var allPath = " ";
            HttpResponseMessage response = new HttpResponseMessage();
            var abc = Request.Properties.Values;
            var httpRequest = HttpContext.Current.Request;
            foreach (string file in httpRequest.Files)
            {
                pathToSql = " http://localhost:58516/UploadFiles/";
                var postedFile = httpRequest.Files[file];
                var directoryPath = HttpContext.Current.Server.MapPath(" ~/ UploadFiles / ");
                Directory.CreateDirectory(directoryPath + id);
                allPath = directoryPath + id + "/" + postedFile.FileName;
                postedFile.SaveAs(allPath);
                pathToSql += id + "/ " + postedFile.FileName;
                using (HMO_PROGECTEntities db = new HMO_PROGECTEntities())
                {
                    var product = db.PRODUCTS_TBL.FirstOrDefault(u => u.productId.ToString() == id);
                    product.imag = pathToSql;
                    db.SaveChanges();
                }
            }
            return response;
        }
    }
}

