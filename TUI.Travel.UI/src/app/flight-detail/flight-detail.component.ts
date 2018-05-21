import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, NgForm } from '@angular/forms';

import { Observable } from 'rxjs/RX';
import { map, startWith } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material';

import { FlightsService } from '../flights/flights.service';
import { AirportsService } from '../airports/airports.service';
import { Flight } from '../flight';
import { Airport } from '../airport';
import { FlightFromViewModel } from './flight-from-view-model';

@Component({ selector: 'app-flight-detail', templateUrl: './flight-detail.component.html', styleUrls: ['./flight-detail.component.css'] })
export class FlightDetailComponent implements OnInit {

  private flight: Flight;
  private airports: Airport[] = [];
  private departureAirportControl: FormControl = new FormControl();
  private filteredDepartureAirports: Observable<Airport[]>;
  private destinationAirportControl: FormControl = new FormControl();
  private filteredDestinationAirports: Observable<Airport[]>;

  constructor(private route: ActivatedRoute, private router: Router,
    private flightsService: FlightsService, private airportsService: AirportsService,
    private snackBar: MatSnackBar) {
    const id = this.route.snapshot.paramMap.get('id');

    this.flight = new Flight();
    if (id == null) {
      this.flight.DepartureDate = new Date();
    } else {
      this.flight.FlightId = Number(id);
    }
  }

  ngOnInit() {
    this.getAirports().subscribe(airports => {
      if (airports === undefined) {
        this.openSnackBar('Error on getting airports');
        return;
      }

      this.airports = airports;

      this.filteredDepartureAirports = this
        .departureAirportControl
        .valueChanges
        .pipe(startWith(''), map(val => this.filterAiports(val)));

      this.filteredDestinationAirports = this
        .destinationAirportControl
        .valueChanges
        .pipe(startWith(''), map(val => this.filterAiports(val)));

      if (this.flight.FlightId > 0) {
        this.flightsService.getFlight(this.flight.FlightId).subscribe(f => {
          if (f === undefined) {
            this.openSnackBar('Error on getting flight');
            return;
          }

          this.flight = f;
          this.flight.DepartureDate = new Date(this.flight.DepartureDate);
          this.departureAirportControl.setValue(this.flight.DepartureAirport.Name);
          this.destinationAirportControl.setValue(this.flight.DestinationAirport.Name);
        });
      }
    });
  }

  getAirports(): Observable<Airport[]> {
    return this.airportsService.getAirports();
  }

  filterAiports(val: string): Airport[] {
    return this
      .airports
      .filter(airport => airport.Name.toLowerCase().includes(val.toLowerCase()));
  }

  onSubmit(form: NgForm) {
    const departureAirport = this.getAirportByName(this.departureAirportControl.value);
    if (departureAirport == null) {
      this.openSnackBar('A valid departure airport is required');
      return;
    }

    const destinationAirport = this.getAirportByName(this.destinationAirportControl.value);
    if (destinationAirport == null) {
      this.openSnackBar('A valid destination airport is required');
      return;
    }

    const flight = new FlightFromViewModel();
    flight.FlightId = this.flight.FlightId;
    flight.Name = form.value.Name;
    flight.DepartureDate = new Date(form.value.DepartureDate);
    flight.DepartureAirportId = departureAirport.AirportId;
    flight.DestinationAirportId = destinationAirport.AirportId;

    if (flight.FlightId > 0) {
      this.updateFlight(flight);
    } else {
      this.addFlight(flight);
    }
  }

  updateFlight(flight: FlightFromViewModel): void {
    this.flightsService.updateFlight(flight).subscribe(f => {
      if (f === undefined) {
        this.openSnackBar(`Error on updating flight with name ${flight.Name}`);
        return;
      }

      this.openSnackBar(`Flight with name ${flight.Name} updated with success`, false);
      this.router.navigate(['/flights']);
    });
  }

  addFlight(flight: FlightFromViewModel): void {
    this.flightsService.addFlight(flight).subscribe(f => {
      if (f === undefined) {
        this.openSnackBar(`Error on adding flight with name ${flight.Name}`);
        return;
      }

      this.openSnackBar(`Flight with name ${flight.Name} added with success`, false);
      this.router.navigate(['/flights']);
    });
  }

  getAirportByName(airportName: string): Airport {
    const filtredTab = this.airports.filter(airport => airport.Name === airportName);
    if (filtredTab.length === 0) {
      return null;
    }

    return filtredTab[0];
  }

  openSnackBar(msg: string, isError: boolean = true) {
    this
      .snackBar
      .open(msg, '', {
        duration: 4000,
        verticalPosition: 'top',
        panelClass: isError
          ? 'custom-error-class-snackbar'
          : 'custom-success-class-snackbar'
      });
  }

}
