﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class HMO_PROGECTEntities : DbContext
    {
        public HMO_PROGECTEntities()
            : base("name=HMO_PROGECTEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AGE_TBL> AGE_TBL { get; set; }
        public virtual DbSet<CATEGORIES_TBL> CATEGORIES_TBL { get; set; }
        public virtual DbSet<HMO_TBL> HMO_TBL { get; set; }
        public virtual DbSet<INSURANCE_TBL> INSURANCE_TBL { get; set; }
        public virtual DbSet<PRICE> PRICEs { get; set; }
        public virtual DbSet<PRODUCTS_TBL> PRODUCTS_TBL { get; set; }
        public virtual DbSet<REQUEST_TBL> REQUEST_TBL { get; set; }
        public virtual DbSet<SATISFICATION_TBL> SATISFICATION_TBL { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<USERS_TBL> USERS_TBL { get; set; }
    }
}