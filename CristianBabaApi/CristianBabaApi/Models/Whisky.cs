using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CristianBabaApi.Models
{
    public class Whisky
    {
        public int Id { get; set; }
        [Required]
        public string Price { get; set; }
        [Required]
        public string Name { get; set; }
        public int Rating { get; set; }
        [Url]
        public string Pictureurl { get; set; }
        // [required ] en [stringlength(100)]           required dient dat het een verplichte veld is en length is lengte van u data



    }
}
