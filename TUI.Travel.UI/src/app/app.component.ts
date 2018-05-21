import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get isReport(): boolean {
    return this.router.url.endsWith('flightsReport');
  }

  get isFlights(): boolean {
    return this.router.url.endsWith('flights');
  }

  constructor(private router: Router) {
  }

}
