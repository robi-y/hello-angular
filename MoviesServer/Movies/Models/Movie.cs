using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace Movies.Models
{
    [DataContract]
    public class Movie
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public string ImageUrl { get; set; }
        [DataMember]
        public double Rating { get; set; }

        public Movie(int id, string name, string url, double rating)
        {
            Id = id;
            Name = name;
            ImageUrl = url;
            Rating = rating;
        }

        public Movie()
        { }
    }
}