using Movies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Movies.Controllers
{
    [RoutePrefix("api/movies")]
    public class MoviesController : ApiController
    {
        [HttpGet]
        [Route("count")]
        public IHttpActionResult GetCount()
        {
            return Ok(Repository.Instance.Count);
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult GetAll()
        {
            return Ok(Repository.Instance.All);
        }


        [HttpGet]
        [Route("{id:int}")]
        public IHttpActionResult GetMovie(int id)
        {
            try
            {
                return Ok(Repository.Instance.All);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult AddMovie([FromBody]Movie movie)
        {
            var res = Repository.Instance.Add(movie);

            return Created($"http://localhost:57993/api/movies/{res.Id}", res);
        }
    }
}
