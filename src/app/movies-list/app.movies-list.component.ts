import { OnInit } from '@angular/core';
import { MoviesService } from './../services/movies.service';
import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Movie } from './../model/movie';
@Component({
  templateUrl: 'app.movies-list.component.html',
  styleUrls: ['app.movies-list.component.css'],
  selector: 'app-movies-list'
})
export class MoviesListComponent implements OnInit{

  movies: Movie[];
  selectedMovie: Movie;

  constructor(
    private router: Router,
    private service: MoviesService
  ) {}

  selectMovie(movie: Movie): void {
    this.router.navigate(['/', 'movies', movie.id]);


  }
  loadMovies() {
    this.service.getMovies().then(result => {
      this.movies = result;
    });
  }

  ngOnInit(): void {
    this.loadMovies();
  }
}
