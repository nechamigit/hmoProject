using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace BLL.CRUD
{
   public class RequestCRUD
    {
        enum ErequestKind {מחיקה =1,עדכון=2,הוספה=3}
        static HMO_PROGECTEntities ctx = new HMO_PROGECTEntities();
        //readById
        public static REQUEST_DTO ReadById(HMO_PROGECTEntities ctx, int id)
        {
            return ctx.REQUEST_TBL.Where(u => u.requestId == id).ToList()
                .Select(u => Casting.REQUEST_Casting.CastToDTO(u))
                .FirstOrDefault();
        }
        //readList
        public static List<REQUEST_DTO> read()
        {
            var x = ctx.REQUEST_TBL.ToList().Select(u => Casting.REQUEST_Casting.CastToDTO(u)).ToList();
            return x;
        }
        //create
      public static void Create(REQUEST_DTO request)
        {
            ctx.REQUEST_TBL.Add(new REQUEST_TBL { categoryName = request.categoryName, parentCategory = request.parentCategory, requestKind = request.requestKind, requestStatus = request.requestStatus });
            ctx.SaveChanges();
        }
        //delete
      public static void Delete(REQUEST_DTO request)
        {
            ctx.REQUEST_TBL.Remove(ctx.REQUEST_TBL.FirstOrDefault(u => u.requestId == request.requestId));
            ctx.SaveChanges();
        }

    }
}

