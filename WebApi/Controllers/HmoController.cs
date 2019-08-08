using BLL.Module;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DTO;
using BLL.CRUD;

namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("hmo")]
 
    public class HmoController : ApiController
    {
       
        [HttpGet]
        [Route("GetAllhmo")]
        public List<HMO_DTO> GetAllhmos()
        {
            return  HmoModule.GetAllHmo();
        }
        [HttpGet]
        [Route("readById/{id}")]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                return Ok(HmoCRUD.GetHmoById(id));
            }
            catch (Exception e)
            {

                return InternalServerError();
            }
        }
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreateHmo(HMO_TBL hmo,HMO_PROGECTEntities ctx)
        {
            try
            {
                HmoCRUD.Create(ctx,hmo);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }

        }
        [HttpPost]
        [Route("delete")]
        public IHttpActionResult Delete(HMO_PROGECTEntities ctx,HMO_TBL hmo)
        {
            try
            {
                HmoCRUD.delete(ctx,hmo);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}
