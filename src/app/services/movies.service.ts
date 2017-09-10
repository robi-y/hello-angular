import { Injectable } from '@angular/core';
import { Movie } from './../model/movie';

@Injectable()
export class MoviesService {

private movies: Array<Movie>;

  constructor() {
    const res = new Array<Movie>();
    res.push({
      name: 'Pulp Fiction',
      id: 1,
      rating: 3.5,
      imageUrl: 'https://pmd205465tn-a.akamaihd.net/Miramax/279/95/hiamxwYTqGi5jcQNYzQwZxZRYqvKxtw5_h264_3800_640x360_352124483894.jpg'
    });
    res.push({
      name: 'Resrviour Dogs',
      id: 2,
      rating: 4.2,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/e\
n/7/79/Reservoir_Dogs_Game_PS2_Front_Cover.JPG'
    });
    res.push({
      name: 'Kill Bill',
      id: 3,
      rating: 5.5,
      imageUrl: 'https://upload.wikimedia.org/wikipedia\
/en/c/cf/Kill_bill_vol_one_ver.jpg'
    });
    this.movies = res;

}

  getMoviesLocal(): Array<Movie>  {
    return this.movies;
  }

  getMovies(): Promise<Array<Movie>>  {
        return Promise.resolve(this.movies);
  }

  getMoviesSlow(): Promise<Array<Movie>>  {
    const p = new Promise<Array<Movie>>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.movies);
      }, 3000);
    });
    return p;
}
}