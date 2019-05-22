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
        public List<Whisky> GetWhiskies()
        {
            return _context.Whiskies.ToList();
        }


        //get Whisky by id
        [Route("{id}")]
        [HttpGet]
        public ActionResult<Whisky> Getwhisky(int id)
        {
            var thewhisky = _context.Whiskies.Include(whisky =>whisky.Name)
                                        .SingleOrDefault(brand => brand.Id == id);
            if (thewhisky == null)
                return NotFound();

            return thewhisky;
        }


        // add a whisky
             [HttpPost]
        public ActionResult<Whisky> AddWhisky([FromBody]Whisky whisky)
        {
            _context.Whiskies.Add(whisky);
            _context.SaveChanges();
            //return whisky by id 
            return Created("", whisky);
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

                    [HttpPost]
            public ActionResult<Whisky> AddBook([FromBody]Whisky whisky)
            {
                _context.Whiskies.Add(whisky);
                _context.SaveChanges();
                //return boek met ID
                return Created("", whisky);
            }

        [HttpPut]
        public ActionResult<Whisky> UpdateBook([FromBody]Whisky whisky)
        {
            //Boek updaten
            _context.Whiskies.Update(whisky);
            _context.SaveChanges();
            //return boek met ID
            return Created("", whisky);
        }



    }
}
