using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL.Casting
{
     class USERS_Casting
    {
      static HMO_PROGECTEntities DB = new HMO_PROGECTEntities();
        public static USERS_DTO CastToDTO(USERS_TBL a)
        {
            return new USERS_DTO
            {
                userName = a.userName,
                adress = a.adress,
                //hmoId = a.hmoId,
                isAdmin=a.isAdmin,
                mail = a.mail,
                password = a.password,
                telephone = a.telephone,
                tz = a.tz,
				lastName=a.lastName,
				firstName=a.firstName,
				hmoId=(int)a.hmoId,
                userId=a.userId,
                isConfirm=a.isConfirm,
                requestForm =a.requestForm,
                isActive=a.isActive
                
            };
        }
        public static USERS_TBL CastToTBL(USERS_DTO a)
        {
            return new USERS_TBL
            {
                userName = a.userName,
                adress = a.adress,
                hmoId = a.hmoId,
                isAdmin =a.isAdmin,
                mail = a.mail,
                password = a.password,
                telephone = a.telephone,
                tz = a.tz,
                userId = a.userId,
				firstName=a.firstName,
				lastName=a.lastName,
                isConfirm = a.isConfirm,
                requestForm = a.requestForm,
                isActive=a.isActive
                //HMO_TBL = DB.HMO_TBL.Where(s => s.hmoId == a.hmoId).FirstOrDefault(),
                //REQUEST_TBL = DB.REQUEST_TBL.Where(s => s.userId == a.userId).FirstOrDefault()

            };
        }
    }
}
