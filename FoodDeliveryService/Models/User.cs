﻿using System;
using System.Collections.Generic;

#nullable disable

namespace FoodDeliveryService
{
    public partial class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Patronymic { get; set; }
        public string Phone { get; set; }
        public string UserName { get; set; }

    }
}