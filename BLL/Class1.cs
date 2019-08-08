using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace BLL
{
    public  class Class1
    {
        HMO_PROGECTEntities db = new HMO_PROGECTEntities();

         USERS_TBL use;
        public string Login(string tz,string name)
        {
            use = db.USERS_TBL.Where(g => g.tz == tz).FirstOrDefault();
            if (use != null && use.kind == 1)
                //return use.userName;
                return "manager";
            else if (use != null && use.kind == 2)
                return "clerk";
            else
                return null;
        
             
        }
            
        public int addClerk(string userName, string tz,string telephone,string mail,string adress)
        {
            use = db.USERS_TBL.Where(g => g.tz == tz).FirstOrDefault();
            if (use == null)
            {
                db.USERS_TBL.Add(new USERS_TBL() { userName = userName, adress = adress, kind = 2, mail = mail, telephone = telephone, tz = tz });
                db.SaveChanges();
                return 0;
            }
            return 1;            
        }

        CATEGORIES_TBL category = new CATEGORIES_TBL();
        public CATEGORIES_TBL isSearchExist(string search_text)
        {
            category = db.CATEGORIES_TBL.Where(g => g.categoryName.Contains(search_text)).FirstOrDefault();
            if (category != null)
                return category;
            else
                return null;
        }
        public CATEGORIES_TBL show_sub_category()
        {
            return category;
        }
        
    }
}