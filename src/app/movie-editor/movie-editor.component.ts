import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {
  movieForm = new FormGroup({
    'name': new FormControl(null),
    'imageUrl': new FormControl(null)
  });
  constructor() {}
  onSubmit(): void {
    console.log(this.movieForm);
  }

  ngOnInit() {}
}
