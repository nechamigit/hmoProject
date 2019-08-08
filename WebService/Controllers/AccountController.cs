using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebService.Controllers
{
    public class AccountController : ApiController
    {

        [HttpPost]
        public bool Login(string UserName,string Password)
        {
            return true;
        }
    }
}
