using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BLL.CRUD
{
    public static class InsuranceCRUD
    {
        public static HMO_PROGECTEntities ctx = new HMO_PROGECTEntities();
        //create
        public static void Create(INSURANCE_DTO insurence)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                ctx.INSURANCE_TBL.Add(new INSURANCE_TBL());
                ctx.SaveChanges();
            }
        }

        //read
        public static List<INSURANCE_TBL> GetAllInsurance(HMO_PROGECTEntities ctx)
        {
            return ctx.INSURANCE_TBL.ToList();
        }
        //readById
        public static INSURANCE_DTO ReadById(HMO_PROGECTEntities ctx, int id)
        {
            return ctx.INSURANCE_TBL.Where(u => u.insuranceId == id).ToList()
                .Select(u => Casting.INSURANSE_Casting.CastToDTO(u))
                .FirstOrDefault();
        }
        //delete
        public static void Delete(HMO_PROGECTEntities ctx, INSURANCE_DTO insurance)
        {
            ctx.INSURANCE_TBL.Remove(ctx.INSURANCE_TBL.Find(insurance));
            ctx.SaveChanges();
        }
        //readList
        //public static List<INSURANCE_TBL> readList(HMO_PROGECTEntities ctx)
        //{
        //    return ctx.INSURANCE_TBL.ToList();
        public static INSURANCE_TBL Read(int id)
        {
            return ctx.INSURANCE_TBL.Where(u => u.insuranceId == id).FirstOrDefault();
        }
    }
    //public static List<INSURANCE_DTO> Read(HMO_PROGECTEntities ctx)
    //{
    //    var x = ctx.INSURANCE_TBL.Where(u => u.isAdmin == false).ToList().Select(u => Casting.USERS_Casting.CastToDTO(u)).ToList();
    //    return x;
    //}

    //update

}
 
       
    

