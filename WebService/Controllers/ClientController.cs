using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using DTO;
using BLL;

namespace WebService.Controllers
{
    public class ClientController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage Login(string userName)
        {

            return Request.CreateResponse(HttpStatusCode.OK);
            //var entity = Class1.Login(id);
            //if (entity != null)
            //{
            //}
            //else
            //{
            //    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee With id = " + id.ToString() + " not found");
            //    {
            //    }
        }
    }
    }