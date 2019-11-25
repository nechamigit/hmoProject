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
        //public static List<REQUEST_DTO> read()
        //{
        //    var x = ctx.REQUEST_TBL.ToList().Select(u => Casting.REQUEST_Casting.CastToDTO(u)).ToList();
        //    return x;
        //}
		public static List<REQUEST_DTO> Read()
		{
			//return 
			List<REQUEST_DTO> list = new List<REQUEST_DTO>();
			var requestList = ctx.REQUEST_TBL.ToList();//.Select(p=> Casting.PRICE_Casting.CastToDTO(p)).ToList();
			foreach (var request in requestList)
			{
				REQUEST_DTO item = new REQUEST_DTO()
				{
					categoryName=request.categoryName,
					requestId=request.requestId,
					userName=request.USERS_TBL.firstName+" "+request.USERS_TBL.lastName,
					//discount = price.discount,
					//hmoName = price.INSURANCE_TBL.HMO_TBL.hmoName,
					//insuranceName = price.INSURANCE_TBL.insuranceName,
					//priceText = price.priceText,
					//productName = price.PRODUCTS_TBL.name,
					//ageRange = price.AGE_TBL.begins + "-" + price.AGE_TBL.ends,

				};
				list.Add(item);
			}
			return list;
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
		public static REQUEST_DTO UpdateConfirm(REQUEST_DTO request)
		{
			var change = ctx.REQUEST_TBL.FirstOrDefault(u => u.requestId == request.requestId);
			if (change.requestStatus != 0)
				change.requestStatus = 0;
			else
				change.requestStatus = 2;
			ctx.SaveChanges();
			return Casting.REQUEST_Casting.CastToDTO(change);
		}

	}
}

