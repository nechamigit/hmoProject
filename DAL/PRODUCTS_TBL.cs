//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class PRODUCTS_TBL
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
		public PRODUCTS_TBL()
		{
			this.PRICEs = new HashSet<PRICE>();
		}

		public int productId { get; set; }
        public string description { get; set; }
        public int categoryId { get; set; }
        public string imag { get; set; }
        public string name { get; set; }
    
        public virtual CATEGORIES_TBL CATEGORIES_TBL { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PRICE> PRICEs { get; set; }
    }
}
