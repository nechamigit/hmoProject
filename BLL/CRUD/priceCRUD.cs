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
        public static List<PRICE> Read()
        {
            return ctx.PRICEs.ToList();
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
            ctx.PRICEs.Remove(ctx.PRICEs.FirstOrDefault(u => u.priceId == price.priceId));
            ctx.SaveChanges();
        }
    }
}
