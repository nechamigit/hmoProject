using BLL;
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
    public class AccountController : ApiController
    {
        [HttpPost]
        [Route("login")]
        public IHttpActionResult Login(UserLoginData user)
        {
            try
            {
                return Ok(UserBLL.Login(user.UserName, user.Password));

            }
            catch (Exception)
            {

                return InternalServerError();
            }
        }
    }
}