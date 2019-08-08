using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebService.Controllers
{
    
    [RoutePrefix("API/Home")]

   
    public class HomeController : ApiController
    {
        [Route("/login")]
        [HttpGet]
        public string AddNewAssistance()
        {
            return "Hello";
        }

       
    }
    //public HttpResponseMessage Get(int id)
    //{
      
    //        var entity = entities.employeesDatas.FirstOrDefault(e => e.ID == id);
    //        if (entity != null)
    //        {
    //            return Request.CreateResponse(HttpStatusCode.OK, entity);
    //        }
    //        else
    //        {
    //            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee With id = " + id.ToString() + " not found");
    //        }

    //    }

    //}
}
