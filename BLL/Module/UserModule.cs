using BLL.CRUD;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Module
{
    public static class UserModule
    {

        public static USERS_DTO getUserById(int id)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                return UserCRUD.ReadById(ctx, id);

            }

        }
    
    }
}
