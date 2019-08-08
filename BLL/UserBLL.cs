using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using System.Data.SqlClient;

namespace BLL
{
    public static class UserBLL
    {
        static HMO_PROGECTEntities db = new HMO_PROGECTEntities();
        static CATEGORIES_TBL categ;
        static USERS_TBL use;
        static PRODUCTS_TBL prod;
        static AGE_TBL age;
        static INSURANCE_TBL insurance;
        static PRICE price1;
        static PRICE price2;

        public static string Login(string name, string password)
        {
            use = db.USERS_TBL.Where(g => g.userName == name && g.password == password).FirstOrDefault();
            if (use != null)
            {
                if (use.isAdmin == true)
                    return "manager";
                return "clerk";
            }
            return null;
        }

        //public static int addClerk(string userName, string tz, string telephone, string mail, string adress,bool isAdmin)
        //{
        //    use = db.USERS_TBL.Where(g => g.tz == tz).FirstOrDefault();
        //    if (use == null)
        //    {
        //        Random rand = new Random();
        //        db.USERS_TBL.Add(new USERS_TBL() { userName = userName, adress = adress, isAdmin=isAdmin, mail = mail, telephone = telephone, tz = tz });
        //        db.SaveChanges();
        //        return 0;
        //    }
        //    return 1;
        //}
        public static void deleteProduct(int productid)
        {
            prod = db.PRODUCTS_TBL.Where(g => g.productId == productid).FirstOrDefault();
            if (prod != null)
            {
                db.PRODUCTS_TBL.Remove(db.PRODUCTS_TBL.Find(prod));
                db.SaveChanges();
            }
        }

        static CATEGORIES_TBL category = new CATEGORIES_TBL();
        public static CATEGORIES_TBL isSearchExist(string search_text)
        {
            category = db.CATEGORIES_TBL.Where(g => g.categoryName.Contains(search_text)).FirstOrDefault();
            if (category != null)
                return category;
            else
                return null;
        }
        public static void DeleteClerk(string password)
        {
            use = db.USERS_TBL.Where(g => g.password == password).FirstOrDefault();
            if (use != null)
            {
                db.USERS_TBL.Remove(db.USERS_TBL.Find(use));
                db.SaveChanges();
            }
        }
        public static void forgetPassword(string mail)
        {
            // -----------------
            Random rand = new Random();
            use = db.USERS_TBL.Where(g => g.mail == mail).FirstOrDefault();
            if (use != null)
            {
                db.USERS_TBL.Find(use).password = rand.ToString();
            }
            //---------------------
        }
        public static INSURANCE_TBL the_worth_hmo(int age, string categoryName)
        {
            categ = db.CATEGORIES_TBL.Where(g => g.categoryName == categoryName).FirstOrDefault();
            prod = db.PRODUCTS_TBL.Where(g => g.categoryId == categ.categoriesId).FirstOrDefault();
            price1 = db.PRICEs.Where(g => g.productId == prod.productId).FirstOrDefault();
            insurance = db.INSURANCE_TBL.Where(g => g.insuranceId == price1.insuranceId).FirstOrDefault();
            //age = db.AGE_TBL.Where(g => g.begins >= age && s=>s.ends <= age).FirstOrDefault();
            return insurance;
        }
        public static List<CATEGORIES_TBL> Keywords(string strCategory)
        {
            List<CATEGORIES_TBL> categoryList = new List<CATEGORIES_TBL>();
            categoryList = db.CATEGORIES_TBL.Where(g => g.categoryName.Contains(strCategory)).ToList();
            List<CATEGORIES_TBL> categoryList1 = categoryList;
            if (categoryList1 != null)
            {
                return categoryList;
            }
            return null;
        }

    }
}