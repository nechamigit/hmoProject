using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BLL.CRUD
{

    public static class UserCRUD
    {
        //create
        static HMO_PROGECTEntities ctx = new HMO_PROGECTEntities();
		public static void Create(USERS_DTO user)
		{
			using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
			{


				USERS_TBL newUser = ctx.USERS_TBL.Where(u => u.userId == user.userId || u.userName == user.userName).FirstOrDefault();
				if (newUser == null)
				{
					ctx.USERS_TBL.Add(new USERS_TBL()
					{
						firstName = user.firstName,
						lastName = user.lastName,
						userName = user.userName,
						password = user.password,
						hmoId = user.hmoId,
						mail = user.mail,
						telephone = user.telephone,
						adress = user.adress,
						tz = user.tz,
						requestForm = user.requestForm,
						isActive = true,
						isConfirm = false
					});
					ctx.SaveChanges();

				}
				else
				{
					throw new Exception("is exsist");
				}


			}
		}
        //readById
        public static USERS_DTO ReadById(HMO_PROGECTEntities ctx, int id)
        {
			return ctx.USERS_TBL.Where(u => u.userId == id && u.isActive != false).ToList()
                .Select(u => Casting.USERS_Casting.CastToDTO(u))
                .FirstOrDefault();
        }
        //delete
        public static void Delete(USERS_DTO user)
        {
			var userToRemove = ctx.USERS_TBL.FirstOrDefault(u => u.userId == user.userId);
			userToRemove.isActive = false;
			ctx.SaveChanges();
        }
        //readList
        public static List<USERS_DTO> Read()
        {
            var x = ctx.USERS_TBL.Where(u => u.isAdmin == false && u.isActive != false).ToList().Select(u => Casting.USERS_Casting.CastToDTO(u)).ToList();
            return x;
        }
        //public static List<PRODUCTS_TBL> GetAllProducts(HMO_PROGECTEntities ctx)
        //{
        //    return ctx.PRODUCTS_TBL.ToList();
        //}
        public static USERS_DTO UpdateConfirm(USERS_DTO user)
        {
            //USERS_DTO userToUpdate =ReadById(ctx, user.userId);
            //userToUpdate.isConfirm = true;
            //ctx.SaveChanges();
            //return userToUpdate;
            var change= ctx.USERS_TBL.FirstOrDefault(u => u.password == user.password);
            change.isConfirm = !change.isConfirm;


            ctx.SaveChanges();
            return Casting.USERS_Casting.CastToDTO(change);    
        }
		public static void Update(USERS_DTO user)
		{
			using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
			{
				var x = ctx.USERS_TBL.FirstOrDefault(u => u.userId == user.userId);
				x.userName = user.userName;
				x.tz = user.tz;
				x.lastName = user.lastName;
				x.firstName = user.firstName;
				x.adress = user.adress;
				x.isAdmin = user.isAdmin;
				x.telephone = user.telephone;
				x.password = user.password;
				x.mail = user.mail;
				x.isConfirm = user.isConfirm;
				x.isActive = user.isActive;
				x.hmoId = user.hmoId;
				ctx.SaveChanges();
			}

		}
    }
}





