using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using BLL.CRUD;


namespace BLL.Module
{
    public static class ProductsModule
    {
        //public static PRICE price;
        public static PRODUCTS_DTO getProductsById(int id)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                return ProductsCRUD.ReadById(ctx, id);
            }
        }
        //public static List<PRODUCTS_TBL> getProductByKriterion(CATEGORIES_TBL category, AGE_TBL age)
        //{
        //    using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
        //    {

        //        ctx.PRODUCTS_TBL.SqlQuery("").Select()
        //        List<PRICE> productPrice;
        //        var productList = ctx.PRODUCTS_TBL.Where(u => u.categoryId == category.categoriesId);
        //        foreach (var item in productList)
        //        {
        //            productPrice = ctx.PRICEs.Where(u => u.productId == item.productId).ToList();
        //        }
        //        var proList = productPrice.Where(u => u.ageId == age.ageId).ToList();
        //        return null;
        //    }
        //}
        //פונקציה המביאה פריטים לפי חיפוש מורחב
        //      public static List<ProductPrices> getComplexsearch(int age,string inputSearch)
        //{
        //	using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
        //	{
        //		List<pro>
        //	}
        //	return null;

        //}
        public static List<ProductPrices> getProductByKriterionAndAge(int productId, int age)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                var product = ctx.PRODUCTS_TBL.FirstOrDefault(i => i.productId == productId);
                List<ProductPrices> listOfProductPrice = (from prc in ctx.PRICEs
                                                          join ins in ctx.INSURANCE_TBL on prc.insuranceId equals ins.insuranceId
                                                          join hmo in ctx.HMO_TBL on ins.hmoId equals hmo.hmoId
                                                          where prc.productId == productId
                                                          
                                                          select new ProductPrices
                                                          {
                                                              AgeId = prc.ageId,
                                                              AgeBegin = prc.AGE_TBL.begins,
                                                              AgeEnd = prc.AGE_TBL.ends,
                                                              Discount = prc.discount,
                                                              HmoId = hmo.hmoId,
                                                              HmoName = hmo.hmoName,
                                                              InsuranceId = ins.insuranceId,
                                                              InsuranceName = ins.insuranceName,
                                                              InsurancePrice = ins.InsurancePrice,
                                                              PriceId = prc.priceId,
                                                              PriceText = prc.priceText,
                                                              ProductId = productId,
                                                              ProductName = product.name
                                                          }).ToList();
                var l = listOfProductPrice.Where(x => x.AgeBegin <= age && x.AgeEnd >= age).ToList();
                var listAge = ctx.AGE_TBL.ToList();
                foreach (var ageItem in listAge)
                {
                    var listOfRelevantAge = listOfProductPrice.Where(i => i.AgeId == ageItem.ageId).ToList();
                    foreach (var relevantAge in listOfRelevantAge)
                    {
                        relevantAge.AgeBegin = ageItem.begins;
                        relevantAge.AgeEnd = ageItem.ends;
                    }
                }
                return l;
            }
        }



        public static List<ProductPrices> getProductByKriterion(int productId)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                var product = ctx.PRODUCTS_TBL.FirstOrDefault(i => i.productId == productId);
               List<ProductPrices> listOfProductPrice = (from prc in ctx.PRICEs
                              join ins in ctx.INSURANCE_TBL on prc.insuranceId equals ins.insuranceId
                              join hmo in ctx.HMO_TBL on ins.hmoId equals hmo.hmoId
                              where  prc.productId == productId
                              select new ProductPrices
                              {
                                  AgeId = prc.ageId,
                                  Discount = prc.discount,
                                  HmoId = hmo.hmoId,
                                  HmoName = hmo.hmoName,
                                  InsuranceId = ins.insuranceId,
                                  InsuranceName = ins.insuranceName,
								  InsurancePrice=ins.InsurancePrice,
								  PriceId = prc.priceId,
                                  PriceText = prc.priceText,
                                  ProductId = productId,
                                  ProductName = product.name
                              }).ToList();
                var listAge = ctx.AGE_TBL.ToList();
                foreach (var age in listAge)
                {
                    var listOfRelevantAge= listOfProductPrice.Where(i => i.AgeId == age.ageId).ToList();
                    foreach (var relevantAge in listOfRelevantAge)
                    {
                        relevantAge.AgeBegin = age.begins;
                        relevantAge.AgeEnd = age.ends;
                    }
                }
                return listOfProductPrice;
            }
        }

        public class ProductPrices
        {
            public int ProductId { get; set; }
            public string ProductName { get; set; }

            public int PriceId { get; set; }
            public double? PriceText { get; set; }
            public double? Discount { get; set; }

            public int InsuranceId { get; set; }
            public string InsuranceName { get; set; }
			public double? InsurancePrice { get; set; }

			public int HmoId { get; set; }
            public string HmoName { get; set; }


            public int? AgeId { get; set; }

            public int? AgeBegin { get; set; }

            public int? AgeEnd { get; set; }

        }


    }
}
