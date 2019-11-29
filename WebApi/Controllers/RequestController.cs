using BLL.CRUD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BLL.Module;
using System.Web.Http.Cors;
using BLL.models;
using DTO;
namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("request")]
    public class RequestController : ApiController
    {
        [HttpGet]
        [Route("read")]
        public IHttpActionResult ReadRequest()
        {
            try
            {
                return Ok(RequestCRUD.Read());
            }
            catch (Exception e)
            {

                return InternalServerError();
            }
        }
        [HttpGet]
        [Route("readById/{id}")]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                return Ok(RequestModule.getRequestById(id));
            }
            catch (Exception e)
            {

                return InternalServerError();
            }
        }
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult Create(REQUEST_DTO request)
        {
            try
            {
                RequestCRUD.Create(request);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
        [HttpPost]
        [Route("Delete")]
        public IHttpActionResult Delete(REQUEST_DTO request)
        {
            try
            {
                RequestCRUD.Delete(request);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
		[HttpPost]
		[Route("confirm")]
		public IHttpActionResult confirm(REQUEST_DTO request)
		{
			try
			{
				RequestCRUD.UpdateConfirm(request);
				return Ok();
			}
			catch (Exception e)
			{

				return InternalServerError(e);
			}
		}
	}
}
