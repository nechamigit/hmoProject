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
    [RoutePrefix("age")]
    public class AgeController : ApiController
    {
        [HttpGet]
        [Route("GetAllAgeRange")]
        public List<AGE_DTO> GetAllAgeRanges()
        {
            return AgeModule.GetAllAgeRange();
        }
    }
}
