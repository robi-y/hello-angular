import { find } from "rxjs/operator/find";
import { Category } from "../model/category";
import { retry } from "rxjs/operator/retry";
import { Observable } from "rxjs/Rx";
import { Http } from "@angular/http";

import { Injectable } from "@angular/core";
import { Movie } from "./../model/movie";
import "rxjs/add/operator/toPromise";

@Injectable()
export class MoviesService {
  private movies: Array<Movie>;
  private movie: Movie;
  constructor(private http: Http) {
    this.movies = [
      {
        name: "Pulp Fiction",
        id: 1,
        rating: 3.5,
        imageUrl:
          "https://pmd205465tn-a.akamaihd.net/Mirama\
x/279/95/hiamxwYTqGi5jcQNYzQwZxZRYqvKxtw5_h264_3800_640x360_\
352124483894.jpg",
        category: Category.action
      },
      {
        name: "Resrviour Dogs",
        id: 2,
        rating: 4.2,
        imageUrl:
          "https://vignette3.wikia.nocookie.net/film\
guide/images/d/de/Reservoir_dogs.jpg/revision/latest?\
cb=20120401231237",
        category: Category.thriller
      },
      {
        name: "Kill Bill",
        id: 3,
        rating: 4.5,
        imageUrl:
          "https://pics.filmaffinity.com/kill_bi\
ll_volume_1-216872360-large.jpg",
        category: Category.action
      },
      {
        name: "The Lion King",
        id: 4,
        rating: 4.9,
        imageUrl:
          "http://t1.gstatic.com/images?q=tbn:ANd9G\
  cQ2vZQTR7HyXqWbjYYr0HNfAyDLRq7EXogJGAgG0bbM8odQlDLV",
        category: Category.animation
      },
      {
        name: "Alladin",
        id: 5,
        rating: 4.1,
        imageUrl:
          "http://t2.gstatic.com/images?q=tbn:ANd9GcSsS\
  EOwh6rx0SSBgd5IHoAZMaU3jLtyxMfFbtfJFTjc-SYHsFQL",
        category: Category.animation
      },
      {
        name: "Top Secret",
        id: 6,
        rating: 4.1,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BM\
mNhMTZlMmItMDRkYy00YjBlLThiZTEtZDQ1ZjNmYWM4NWVkXkEyXkFqcGdeQXVyMTQxNzMzNDI\
@._V1_UX182_CR0,0,182,268_AL_.jpg",
        category: Category.comedy
      },
      {
        name: "Imagine",
        id: 7,
        rating: 3.9,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:\
ANd9GcRxSueKHbSBvteLLnjh7tlhssmh6tX20KH1L3t5agpCrvrnzYd9",
        category: Category.documentary
      },
      {
        name: "The Kid",
        id: 8,
        rating: 4.2,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/\
M/MV5BMTIwMzk2NTE5NF5BMl5BanBnXkFtZTcwMTcyOTAwMQ@@._V1_UY12\
00_CR105,0,630,1200_AL_.jpg",
        category: Category.drama
      },
      {
        name: "The Godfather",
        id: 9,
        rating: 5.0,
        imageUrl:
          "https://savagefilmandtv.files.wordpress.com/\
2015/07/1972.jpg",
        category: Category.drama
      },
      {
        name: "Schindlers List",
        id: 10,
        rating: 4.8,
        imageUrl:
          "https://s-media-cache-ak0.pinimg.com/736x/a9/5b/\
c5/a95bc5883dd0316ad1c8d78f33d62a9b--classical-music-soundtrack.jpg",
        category: Category.drama
      }
    ];
  }
  getMovies(): Promise<Array<Movie>> {
    return Promise.resolve(this.movies);
  }

  getMoviesSlow(): Promise<Array<Movie>> {
    const p = new Promise<Movie[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.movies);
      }, 3000);
    });
    return p;
  }
  getMoviesFromWeb(): Promise<Array<Movie>> {
    const observable = this.http.get("http://localhost:2801/api/movies");
    const promise = observable.toPromise();
    const result = promise.then(resp => {
      return resp.json() as Array<Movie>;
    });
    return result;
  }

  getMovie(id: number): Promise<Movie> {
    const res = this.movies.filter(m => +m.id === id);
    return Promise.resolve(res[0]);
  }

  getCount(): Promise<number> {
    return Promise.resolve(this.movies.length);
  }
}
