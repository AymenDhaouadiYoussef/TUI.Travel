import { Injectable } from '@angular/core';

import { Flight } from '../flight';
import { FlightFromViewModel } from '../flight-detail/flight-from-view-model';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { LoaderService } from '../loader/loader.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FlightsService {

  private flightAPIUrl = 'api/Flight';

  constructor(private http: HttpClient, private loaderService: LoaderService) { }

  getFlights(): Observable<Flight[]> {
    this
      .loaderService
      .show();
    return this.http.get<Flight[]>(this.flightAPIUrl).pipe(tap(_ => this.loaderService.hide()), catchError(this.handleError<Flight[]>('get all flights')));
  }

  getFlightsByDepartureDate(beginDate: Date, endDate: Date): Observable<Flight[]> {
    const url = `${this
      .flightAPIUrl}/${beginDate
        .toISOString()}/${endDate
          .toISOString()}`;

    this
      .loaderService
      .show();
    return this.http.get<Flight[]>(url).pipe(tap(_ => this.loaderService.hide()), catchError(this.handleError<Flight[]>('get flights by departure date')));
  }

  getFlight(id: number): Observable<Flight> {
    const url = `${this.flightAPIUrl}/${id}`;
    this
      .loaderService
      .show();
    return this.http.get<Flight>(url).pipe(tap(_ => this.loaderService.hide()), catchError(this.handleError<Flight>(`get flight id=${id}`)));
  }

  addFlight(flight: FlightFromViewModel): Observable<Flight> {
    this
      .loaderService
      .show();
    return this.http.post<Flight>(this.flightAPIUrl, flight, httpOptions).pipe(tap(_ => this.loaderService.hide()), catchError(this.handleError<Flight>('add flight')));
  }

  updateFlight(flight: FlightFromViewModel): Observable<Flight> {
    const url = `${this.flightAPIUrl}/${flight.FlightId}`;
    this
      .loaderService
      .show();
    return this
      .http
      .put(url, flight, httpOptions)
      .pipe(tap(_ => this.loaderService.hide()), catchError(this.handleError<any>(`update flight id=${flight.FlightId}`)));
  }

  deleteFlight(id: number): Observable<any> {
    const url = `${this.flightAPIUrl}/${id}`;
    this
      .loaderService
      .show();
    return this.http.delete<any>(url, httpOptions).pipe(tap(_ => this.loaderService.hide()), catchError(this.handleError<any>(`delete flight id=${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any, caught: Observable<T>): Observable<T> => {
      console.error(`failure on ${operation} : ${error.message}`);
      return of(result as T);
    };
  }

}
