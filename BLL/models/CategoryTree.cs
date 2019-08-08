using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class CategoryTree
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<CategoryTree> children { get; set; }
    }
}