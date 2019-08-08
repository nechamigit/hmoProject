using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BLL.CRUD
{
    public static class HmoCRUD
    {
       //read
        public static List<HMO_TBL> GetAllHmos(HMO_PROGECTEntities ctx)
        {
            return ctx.HMO_TBL.ToList();
        }

        //read by id
        public static HMO_TBL GetHmoById(int id)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                return ctx.HMO_TBL.Where(i => i.hmoId == id).FirstOrDefault();
            }
                
        }

        //create
        public static void Create(HMO_PROGECTEntities ctx, HMO_TBL hmo)
        {
            ctx.HMO_TBL.Add(new HMO_TBL()
            {
                hmoName = hmo.hmoName,
                hmoMail = hmo.hmoMail
            });
            ctx.SaveChanges();
        }



        //update



        //read list
        public static List<HMO_TBL> Read(HMO_PROGECTEntities ctx)
        {
            return ctx.HMO_TBL.ToList();
        }

        //delete
        public static void delete(HMO_PROGECTEntities ctx,HMO_TBL hmo)
        {
            ctx.HMO_TBL.Remove(ctx.HMO_TBL.FirstOrDefault(u=>u.hmoId==hmo.hmoId));
            ctx.SaveChanges();
        }
    }
}

