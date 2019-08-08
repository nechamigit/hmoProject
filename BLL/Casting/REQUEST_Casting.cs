using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL.Casting
{
    class REQUEST_Casting
    {
        static HMO_PROGECTEntities db = new HMO_PROGECTEntities();
        public static REQUEST_DTO CastToDTO(REQUEST_TBL a)
        {
            return new REQUEST_DTO
            {
                categoryName = a.categoryName,
                parentCategory = a.parentCategory,
                requestStatus = a.requestStatus,
                userId= a.userId,
                categoryId=a.categoryId,
                requestKind=a.requestKind,
                requestId=a.requestId,
                 user=Casting.USERS_Casting.CastToDTO(a.USERS_TBL)


    };
        }
        public static REQUEST_TBL CastToTBL(REQUEST_DTO a)
        {
            return new REQUEST_TBL
            {
                categoryName = a.categoryName,
                parentCategory = a.parentCategory,
                requestStatus = a.requestStatus,
                requestKind=a.requestKind,
                categoryId=a.categoryId,
                userId = a.userId,
                requestId=a.requestId
                //USERS_TBL = db.USERS_TBL.Where(s => s.userId == a.userId).FirstOrDefault()
                
            };
        }
    }
}
