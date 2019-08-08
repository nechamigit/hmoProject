using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.models
{
    public class CategoryDetails
    {
        public CategoryDetails()
        {
            ProductsList = new List<PRODUCTS_DTO>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public List<PRODUCTS_DTO> ProductsList { get; set; }
    }
}
