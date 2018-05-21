import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/RX';
import { of } from 'rxjs/observable/of';

import { FlightsService } from '../flights/flights.service';
import { Airport } from '../airport';
import { Flight } from '../flight';

@Component({
  selector: 'app-flights-report',
  templateUrl: './flights-report.component.html',
  styleUrls: ['./flights-report.component.css']
})
export class FlightsReportComponent implements OnInit {

  private flights: Flight[];

  constructor(private flightsService: FlightsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights(): void {
     this.flightsService.getFlights().subscribe(flights => {
        if (flights === undefined) {
          this.openSnackBar('Error on getting flights');
          return;
        }

        flights.forEach(f => {
          f.DepartureDate = new Date(f.DepartureDate);
        });

        this.flights = flights;
      });
  }

  openSnackBar(msg: string, isError: boolean = true) {
    this
      .snackBar
      .open(msg, '', {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: isError ? 'custom-error-class-snackbar' : 'custom-success-class-snackbar'
      });
  }

}
