import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GenericTableModule} from '@angular-generic-table/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {FlightsComponent} from './flights/flights.component';
import {FlightDetailComponent} from './flight-detail/flight-detail.component';
import {FlightsService} from './flights/flights.service';
import {AirportsService} from './airports/airports.service';
import {TuiConfirmDialogComponent} from './tui-confirm-dialog/tui-confirm-dialog.component';
import {FlightsReportComponent} from './flights-report/flights-report.component';
import {LoaderComponent} from './loader/loader.component';
import {LoaderService} from './loader/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FlightDetailComponent,
    TuiConfirmDialogComponent,
    FlightsReportComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    GenericTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers: [
    FlightsService, AirportsService, LoaderService
  ],
  entryComponents: [TuiConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
