using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BLL.CRUD
{
   public class priceCRUD
    {
       public static HMO_PROGECTEntities ctx = new HMO_PROGECTEntities();
        //readById
        public static PRICE_DTO ReadById(HMO_PROGECTEntities ctx,int id)
        {
            return ctx.PRICEs.Where(u => u.priceId == id).ToList().
                Select(u => Casting.PRICE_Casting.CastToDTO(u)).FirstOrDefault();
        }
        //read
        public static List<PRICE_DTO> Read()
        {
			//return 
			List<PRICE_DTO> list = new List<PRICE_DTO>();
			var priceList = ctx.PRICEs.ToList();//.Select(p=> Casting.PRICE_Casting.CastToDTO(p)).ToList();
			foreach (var price in priceList)
			{
				PRICE_DTO item = new PRICE_DTO()
				{
					discount = price.discount,
					hmoName =price.INSURANCE_TBL.HMO_TBL.hmoName,
					insuranceName = price.INSURANCE_TBL.insuranceName,
					priceText = price.priceText,
					productName = price.PRODUCTS_TBL.name,
					ageRange = price.AGE_TBL.begins + "-" + price.AGE_TBL.ends,
					priceId = price.priceId

				};
				list.Add(item);
			}
			return list;
		}
        //create
        public static void create(PRICE_DTO price)
        {
            ctx.PRICEs.Add(new PRICE { priceText = price.priceText, discount = price.discount });
            ctx.SaveChanges();
        }
        //delete
        public static void delete(PRICE_DTO price)
        {
			using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
			{
				ctx.PRICEs.Remove(ctx.PRICEs.FirstOrDefault(u => u.priceId == price.priceId));
				ctx.SaveChanges();
			}
		
        }
		public static void Update(PRICE_DTO price)
		{
			using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
			{
				var x = ctx.PRICEs.FirstOrDefault(u => u.priceId == price.priceId);
				x.insuranceId = price.insuranceId;
				x.INSURANCE_TBL.insuranceName = price.insuranceName;
				x.priceText = price.priceText;
				x.discount = price.discount;
				//x.AGE_TBL.begins = price.ageRange;
				ctx.SaveChanges();
			}

		}
	}
}

