import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/RX';
import { map, startWith, tap } from 'rxjs/operators';

import { GenericTableComponent, GtConfig, GtRow } from '@angular-generic-table/core';

import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

import { FlightsService } from './flights.service';
import { AirportsService } from '../airports/airports.service';
import { Airport } from '../airport';
import { Flight } from '../flight';

import { TuiConfirmDialogComponent } from '../tui-confirm-dialog/tui-confirm-dialog.component';


class RowData extends Flight implements GtRow {
  isOpen?: boolean;
  $$gtRowId?: any;
  $$gtRowClass?: string;
}

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  @ViewChild(GenericTableComponent)
  private myTable: GenericTableComponent<RowData, any>;

  private configObject: GtConfig<RowData> = {
    settings: [],
    fields: [],
    data: []
  };

  private beginDate: Date;
  private endDate: Date;

  private airports: Airport[] = [];
  private airportControl: FormControl = new FormControl();
  private filteredAirports: Observable<Airport[]>;

  constructor(private flightsService: FlightsService, private airportsService: AirportsService,
    private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar) {

    this.beginDate = new Date();
    this.beginDate.setMonth(this.beginDate.getMonth() - 2);

    this.endDate = new Date();
    this.endDate.setMonth(this.endDate.getMonth() + 2);

    this.configObject = {
      settings: [
        {
          objectKey: 'Name',
          search: false
        },
        {
          objectKey: 'DepartureDate',
          sort: 'desc',
          search: false
        },
        {
          objectKey: 'DepartureAirportName'
        },
        {
          objectKey: 'DestinationAirportName'
        },
        {
          objectKey: 'DistanceInKilometer',
          search: false
        },
        {
          objectKey: 'FuelConsumptionInLiter',
          search: false
        },
        {
          objectKey: 'edit_action',
          sort: 'disable',
          search: false
        },
        {
          objectKey: 'delete_action',
          sort: 'disable',
          search: false
        }
      ],
      fields: [
        {
          objectKey: 'Name',
          name: 'Flight name',
          columnClass: 'sort-string'
        },
        {
          objectKey: 'DepartureDate',
          name: 'Departure date',
          sort: (row) => {
            return row.DepartureDate.valueOf();
          },
          render: function (row) {
            return `${row.DepartureDate.toLocaleDateString()} ${row.DepartureDate.toLocaleTimeString()}`;
          }
        },
        {
          objectKey: 'DepartureAirportName',
          name: 'Departure airport',
          columnClass: 'sort-string'
        },
        {
          objectKey: 'DestinationAirportName',
          name: 'Destination airport',
          columnClass: 'sort-string'
        },
        {
          objectKey: 'DistanceInKilometer',
          name: 'Distance (KM)',
          columnClass: 'sort-numeric text-right',
          render: function (row) {
            return `${row.DistanceInKilometer.toFixed(2)}`;
          }
        },
        {
          objectKey: 'FuelConsumptionInLiter',
          name: 'Fuel consumption (L)',
          columnClass: 'sort-numeric text-right',
          render: function (row) {
            return `${row.FuelConsumptionInLiter.toFixed(2)}`;
          }
        },
        {
          objectKey: 'edit_action',
          name: '',
          columnClass: 'gt-button',
          value: () => '',
          render: (row) => {
            // tslint:disable-next-line:max-line-length
            return `<button class="btn btn-sm btn-primary"><i class="fa fa-pencil"></i></button>`;
          },
          click: (row) => this.redirectToFlightDetail(row as Flight)
        },
        {
          objectKey: 'delete_action',
          name: '',
          columnClass: 'gt-button',
          value: () => '',
          render: () => `<button class="btn btn-sm btn-danger"><i class="fa fa-trash-o"></i></button>`,
          click: (row) => this.openDeleteDialog(row)
        }
      ],
      data: []
    };
  }

  ngOnInit() {
    this.getAirports().subscribe(airports => {
      if (airports === undefined) {
        this.openSnackBar('Error on getting airports');
        return;
      }

      this.airports = airports;

      this.filteredAirports = this
        .airportControl
        .valueChanges
        .pipe(
          startWith(''),
          tap(val => {
            this.myTable.gtSearch(val);
          }),
          map(val => this.filterAiports(val))
        );

      this.getFlights();
    });
  }

  getFlights(): void {
    this.flightsService
      .getFlightsByDepartureDate(this.beginDate, this.endDate)
      .subscribe(flights => {
        if (flights === undefined) {
          this.openSnackBar('Error on getting flights');
          return;
        }

        flights.forEach(f => {
          f.DepartureDate = new Date(f.DepartureDate);
          f.DepartureAirportName = f.DepartureAirport.Name;
          f.DestinationAirportName = f.DestinationAirport.Name;
        });

        this.configObject.data = flights;
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

  onSubmitPeriod(form: NgForm) {
    this.beginDate = new Date(form.value.beginDate);
    this.endDate = new Date(form.value.endDate);
    this.getFlights();
  }

  redirectToFlightDetail(flight: Flight): void {
    this.router.navigateByUrl(`/flightDetail/${flight.FlightId}`);
  }

  openDeleteDialog(row: RowData): void {
    const dialogRef = this.dialog
      .open(TuiConfirmDialogComponent, {
        width: '',
        hasBackdrop: true,
        data: {
          title: `Confirm`,
          message: `Do you want to delete the flight ${row.Name}`
        }
      });

    dialogRef
      .afterClosed()
      .subscribe(result => {
        if (result === 'Ok') {
          this.deleteFlight(row as Flight);
        }
      });
  }

  public deleteFlight(flight: Flight): void {
    this.flightsService.deleteFlight(flight.FlightId)
      .subscribe(result => {
        if (result === undefined) {
          this.openSnackBar(`Error on deleting flight ${flight.Name}`);
          return;
        }

        this.configObject.data = this.myTable
          .gtDelete('FlightId', flight.FlightId) as Array<RowData>;
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
