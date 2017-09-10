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

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  constructor() {
    this.selectedMovie = null;
    this.movies = [
      {
        name: 'Pulp Fiction',
        id: 1,
        rating: 3.5,
        imageUrl: 'https://pmd205465tn-a.akamaihd.net/Miramax/279/95/hiamxwYTqGi5jcQNYzQwZxZRYqvKxtw5_h264_3800_640x360_352124483894.jpg'
      },
      {
        name: 'Resrviour Dogs',
        id: 2,
        rating: 4.2,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/e\
n/7/79/Reservoir_Dogs_Game_PS2_Front_Cover.JPG'
      },
      {
        name: 'Kill Bill',
        id: 3,
        rating: 5.5,
        imageUrl: 'https://upload.wikimedia.org/wikipedia\
/en/c/cf/Kill_bill_vol_one_ver.jpg'
      }
    ];
  }

}
