using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CristianBabaApi.Models
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext>options) : base (options)
        {

        }
      public  DbSet<Whisky> Whiskies { get; set; }
        
    }
}
