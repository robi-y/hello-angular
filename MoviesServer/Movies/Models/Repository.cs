using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Movies.Models
{
    public class Repository
    {
        private Dictionary<int, Movie> _all;

        private Repository()
        {
            var movies = new List<Movie>
            {
                new Movie(1, "Hagiga Basnooker", "", 4.8),
                new Movie(2, "Giva'at Halfon", "", 4.8),
                new Movie(3, "Hagiga", "", 4.8),
                new Movie(4, "Hagiga", "", 4.8),
            };

            _all = movies.ToDictionary(m => m.Id);
        }


        public static Repository Instance { get; } = new Repository();

        public int Count { get { return _all.Count; } }

        public IEnumerable<Movie> All {  get { return _all.Values; } }

        public Movie Get(int id)
        {
            if (!_all.ContainsKey(id)) {
                throw new KeyNotFoundException();
            }
            return _all[id];
        }

        public Movie Add(Movie movie)
        {
            int id = _all.Keys.Max() + 1;
            movie.Id = id;
            _all[id] = movie;
            return movie;
        }

        public void Update(Movie movie)
        {
            if (!_all.ContainsKey(movie.Id))
            {
                throw new KeyNotFoundException();
            }

            _all[movie.Id] = movie;

        }

        public void Delete(Movie movie)
        {
            if (!_all.ContainsKey(movie.Id))
            {
                throw new KeyNotFoundException();
            }

            _all.Remove(movie.Id);

        }
    }

   
}