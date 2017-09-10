import { MoviesService } from './services/movies.service';
import { Movie } from './model/movie';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: Movie[];
  selectedMovie: Movie;
  isBusy: boolean;

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  constructor(private moviesService: MoviesService) {
    this.selectedMovie = null;
    this.movies = [];
  }

  loadMovies () {
    this.isBusy = true;
    this.movies = new Array<Movie>();
    const promise = this.moviesService.getMoviesSlow();

    promise.then(results => {
      this.movies = results;
      this.isBusy = false;
    } );
  }

}
