using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
	class ProductPrices_DTO
	{
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


