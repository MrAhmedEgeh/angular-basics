import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      h4{
        color: green;
      }
    `
  ]
})
export class AppComponent {
  title = 'Hi, Ahmed';
}
