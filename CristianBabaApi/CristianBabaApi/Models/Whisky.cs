using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CristianBabaApi.Models
{
    public class Whisky
    {
        public int Id { get; set; }
        public int Price { get; set; }
        // [required ] en [stringlength(100)]           required dient dat het een verplichte veld is en length is lengte van u data
        public string Name { get; set; }

    }
}
