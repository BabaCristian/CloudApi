using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CristianBabaApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CristianBabaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WhiskyController : ControllerBase
    {
        public LibraryContext _context { get; set; }
        public WhiskyController(LibraryContext ctxt)
        {
            _context = ctxt;
        }

        //get all whiskies
        [HttpGet]
        public List<Whisky> GetWhiskies(string price, string name, string sort, int? page, int length = 3, string dir = "asc")
        {

            IQueryable<Whisky> query = _context.Whiskies;

            if (!string.IsNullOrWhiteSpace(price))
            {
                query = query.Where(p => p.Price == price); ;
            }
            if (!string.IsNullOrWhiteSpace(name))
            {
                query = query.Where(n => n.Name == name);
            }
            if (!string.IsNullOrWhiteSpace(sort)) { 
                switch (sort)
                {
                    case "name":
                        if (dir == "asc")
                            query = query.OrderBy(n => n.Name);
                        else if (dir == "desc")
                            query = query.OrderByDescending(n => n.Name);
                        break;
                    case "price":
                        if (dir == "asc")
                            query = query.OrderBy(p => p.Price);
                        else if (dir == "desc")
                            query = query.OrderByDescending(p => p.Price);
                        break;


                }
        }


            if (page.HasValue)
            {
                query = query.Skip(page.Value * length);
            }
            query = query.Take(length);
            return query.ToList();
        }


        //get Whisky by id
        [Route("{id}")]
        [HttpGet]
        public ActionResult<Whisky> Getwhisky(int id)
        {
            var whisky = _context.Whiskies.Find(id);
            if (whisky == null)
            {
                return NotFound();
            }
            else
                return whisky;
        }


        // add a whisky
             [HttpPost]
        public ActionResult<Whisky> AddWhisky([FromBody]Whisky newwhisky)
        {
            _context.Whiskies.Add(newwhisky);
            _context.SaveChanges();
            //return whisky by id 
            return Created("", newwhisky);
        }
    //delete a whisky
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteWhisky(int id)
        {
            var whisky = _context.Whiskies.Find(id);
            if (whisky == null)
                return NotFound();

            _context.Whiskies.Remove(whisky);
            _context.SaveChanges();             
            return NoContent();
        }
        // update a Whisky

        [HttpPut]
        public ActionResult<Whisky> UpdateWhisky([FromBody]Whisky whisky)
        {
            var owhisky = _context.Whiskies.Find(whisky.Id);
            if (owhisky == null)
            {
                return NotFound();
            }
            owhisky.Name = whisky.Name;
            owhisky.Pictureurl = whisky.Pictureurl;
            owhisky.Price = whisky.Price;
            owhisky.Rating = whisky.Rating;
            _context.Whiskies.Update(whisky);

            _context.SaveChanges();
            return Ok(owhisky);
        }



    }
}
