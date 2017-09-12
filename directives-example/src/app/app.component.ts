import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular Pipes';
  birthdate = Date.now();

  items = ['AAA', 'BBB', 'CCC'];
  num = 132;
  obj = {a: 12, b: 15};

  numbers = [1, 2, 3, 4, 5, 6, 7, 8];

}
