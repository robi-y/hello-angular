import { Validator } from 'codelyzer/walkerFactory/walkerFn';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {

  private urlMatcher = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

  movieForm = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'imageUrl': new FormControl(null, [Validators.required, Validators.pattern(this.urlMatcher)])
  });

  constructor() { }

  onSubmit(): void {
    console.log(this.movieForm.value);
  }

  ngOnInit() {
  }

}
