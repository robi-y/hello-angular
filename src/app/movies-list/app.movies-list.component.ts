import { selector } from 'rxjs/operator/multicast';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from './../model/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: 'app.movies-list.component.html',
  styleUrls: ['app.movies-list.component.css']
})
export class MoviesListComponent {
  @Input()
  movies: Movie[];
  selectedMovie: Movie;

  @Output()
  selectedMovieChanged = new EventEmitter<Movie>();

  selectMovie(movie: Movie): void {
    if (this.selectedMovie === movie) {
      this.selectedMovie = null;
    } else {
      this.selectedMovie = movie;
    }

    this.selectedMovieChanged.emit(this.selectedMovie);
  }
}
