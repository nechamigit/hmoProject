using BLL.CRUD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApi.Models;
using DAL;
using DTO;
using BLL.Module;

namespace WebApi.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	[RoutePrefix("clerk")]
	public class ClerkController : ApiController
	{
		[HttpPost]
		[Route("addClerk")]
		public IHttpActionResult addClerck(USERS_DTO user)
		{
			try
			{
				UserCRUD.Create(user);
				return Ok();
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}
		[HttpPost]
		[Route("delete")]
		public IHttpActionResult DeleteClerck(USERS_DTO user)
		{
			try
			{
				UserCRUD.Delete(user);
				return Ok();
			}
			catch (Exception ex)
			{
				return InternalServerError(ex);
			}
		}
		[HttpGet]
		[Route("read")]
		public IHttpActionResult ReadClerck()
		{
			try
			{
				return Ok(UserCRUD.Read());
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
				return Ok(UserModule.getUserById(id));
			}
			catch (Exception e)
			{

				return InternalServerError();
			}
		}
		[HttpPost]
		[Route("UpdateConfirm")]
		public IHttpActionResult UpdateConfirm(USERS_DTO user)
	{
			try
			{
				UserCRUD.UpdateConfirm(user);
				return Ok();
			}
			catch (Exception e)
			{

				return InternalServerError();
			}
		}

		[HttpPost]
		[Route("Update")]
		public IHttpActionResult Update(USERS_DTO user)
		{
			try
			{
				UserCRUD.Update(user);
				return Ok();
			}
			catch (Exception e)
			{

				return InternalServerError(e);
			}
		}
	}
}
