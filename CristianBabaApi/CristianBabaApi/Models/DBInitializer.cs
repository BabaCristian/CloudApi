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

            var whisky = new Whisky()
            {
                Name = "Chivas Regal",
                Price = "50",
                Rating = 4,
                Pictureurl = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Chivas_image_for_wikipedia.jpg"};

            var whisky1 = new Whisky()
            {
                Name = "The Famous Grouse",
                Price = "39",
                Rating = 4,
                Pictureurl = "https://upload.wikimedia.org/wikipedia/commons/4/47/Famous_Grouse_%288447339319%29.jpg"
            };

            var whisky2 = new Whisky()
            {
                Name = "Hibiki",
                Price = "90",
                Rating = 5,
                Pictureurl = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Hibiki_the_premium_blended_whisky_from_Japanese_distiller_Suntory.jpg"
            };
            var whisky3 = new Whisky()
            {
                Name = "Glenffidich",
                Price = "43",
                Rating = 3,
                Pictureurl = "https://upload.wikimedia.org/wikipedia/commons/f/fe/GlenfiddichSpecialReserve12Years.jpg"
            };

            var whisky4 = new Whisky()
            {
                Name = "Dimple",
                Price = "50",
                Rating = 4,
                Pictureurl = "https://upload.wikimedia.org/wikipedia/commons/5/50/Dimple_in_driekante_fles_met_dito_verpakking.jpg"
            };

            var whisky5 = new Whisky()
            {
                Name = "Red Label",
                Price = "35",
                Rating = 3,
                Pictureurl = "https://upload.wikimedia.org/wikipedia/commons/f/fe/Jwalker.JPG"
            };

            var whisky6 = new Whisky()
            {
                Name = "Laphoraig",
                Price = "50",
                Rating = 4,
                Pictureurl = "https://upload.wikimedia.org/wikipedia/commons/9/96/Laphroaig_10YO.JPG"
            };
            var whisky7 = new Whisky()
            {
                Name = "1792",
                Price = "110",
                Rating = 5,
                Pictureurl = "https://upload.wikimedia.org/wikipedia/commons/3/38/1792_Small_Batch.jpg"
            };

            var whisky8 = new Whisky()
            {
                Name = "Ballantines",
                Price = "25",
                Rating = 4,
                Pictureurl = "https://upload.wikimedia.org/wikipedia/commons/0/0c/Scotch_Whisky_%28aka%29.jpg"
            };




            if (!context.Whiskies.Any())
            {
                //create whisky
                context.Whiskies.Add(whisky);
                context.Whiskies.Add(whisky1);
                context.Whiskies.Add(whisky2);
                context.Whiskies.Add(whisky3);
                context.Whiskies.Add(whisky4);
                context.Whiskies.Add(whisky5);
                context.Whiskies.Add(whisky6);
                context.Whiskies.Add(whisky7);
                context.Whiskies.Add(whisky8);
            };
               
                // save changes to db
                context.SaveChanges();
            }

        }
    }
