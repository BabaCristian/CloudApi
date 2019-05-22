using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CristianBabaApi.Models
{
    public class DBInitializer
    {
        public static void Initalize(LibraryContext context)
        {
            // create db if yet not exist
            context.Database.EnsureCreated();
            // if already whiskies present
            if (!context.Whiskies.Any())
            {
                //create whisky 
                var whisky = new Whisky()
                {
                    Id = 1,
                    Name = "Chivas Regal",
                    Price = 50,
                    Rating = 4
                    

                };
                // add the whisky to the collection of whisky
                context.Whiskies.Add(whisky);
                // save changes to db
                context.SaveChanges();
            }

        }
    }
}
