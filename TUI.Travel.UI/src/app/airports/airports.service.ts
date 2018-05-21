import {Injectable} from '@angular/core';

import {Airport} from '../airport';
import {Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

import {LoaderService} from '../loader/loader.service';

@Injectable()
export class AirportsService {

  private airportAPIUrl = 'api/Airport';

  constructor(private http : HttpClient, private loaderService : LoaderService) {}

  getAirports() : Observable < Airport[] > {
    this
      .loaderService
      .show();
    return this.http.get < Airport[] > (this.airportAPIUrl).pipe(tap(_ => this.loaderService.hide()), catchError(this.handleError < Airport[] > ('get airports')));
  }

  private handleError < T > (operation = 'operation', result?: T) {
    return(error : any): Observable < T > => {
      console.error(`failure on ${operation} : ${error.message}`);
      return of(result as T);
    };
  }
}
