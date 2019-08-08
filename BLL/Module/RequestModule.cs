﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using BLL.CRUD;
using DAL;

namespace BLL.Module

{
    public static class RequestModule
    {
        public static REQUEST_DTO getRequestById(int id)
        {
            using (HMO_PROGECTEntities ctx = new HMO_PROGECTEntities())
            {
                return RequestCRUD.ReadById(ctx, id);
            }

        }
    }
}
