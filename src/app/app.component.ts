import { MoviesService } from './services/movies.service';
import { Http } from '@angular/http';

import { Component } from '@angular/core';
import { Movie } from './model/movie';
// decorate defined at class AppComponent to component
// Component defined new elment in html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

