using BLL.CRUD;
using BLL.Module;
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
    [RoutePrefix("price")]
    public class PriceController : ApiController
    {
        [HttpGet]
        [Route("ReadPrice")]
        public IHttpActionResult ReadPrice()
        {
            try
            {
                return Ok(priceCRUD.Read());
            }
            catch (Exception e)
            {

                return InternalServerError(e);
            }
        }
        [HttpGet]
        [Route("readById/{id}")]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                return Ok(PriceModule.getPricetById(id));
            }
            catch (Exception e)
            {

                return InternalServerError();
            }
			

		}
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult Create(PRICE_DTO price)
        {
            try
            {
                priceCRUD.create(price);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
        [HttpPost]
        [Route("Delete")]
        public IHttpActionResult Delete(PRICE_DTO price)
        {
            try
            {
                priceCRUD.delete(price);
                return Ok();
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
