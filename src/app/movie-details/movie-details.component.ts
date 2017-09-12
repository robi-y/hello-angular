import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoviesService } from './../services/movies.service';
import { Movie } from './../model/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: Movie;
  canNext = false;
  canPrev = false;

  constructor(private service: MoviesService,  private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((prms: Params) => {
      const newId = +prms['id'];
      this.loadData(newId);
    });

    const id = + this.route.snapshot.params['id'];
    this.loadData(id);
  }

  loadData(id: number) {
    this.service.getCount()
      .then(count => {
        this.canNext = id < count;
        this.canPrev = id > 1;
      });
    this.service.getMovie(id).then(result => {
        this.selectedMovie = result;
    });
  }

  prev() {
    this.router.navigate(['/', 'movies', this.selectedMovie.id - 1]);
  }

  next() {
    this.router.navigate(['/', 'movies', this.selectedMovie.id + 1]);
  }


}
