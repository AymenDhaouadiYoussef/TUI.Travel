import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightsComponent } from './flights/flights.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { FlightsReportComponent } from './flights-report/flights-report.component';

const routes: Routes = [
  {
    path: 'flights',
    component: FlightsComponent
  }, {
    path: 'flightDetail/:id',
    component: FlightDetailComponent
  }, {
    path: 'newFlight',
    component: FlightDetailComponent
  }, {
    path: 'flightsReport',
    component: FlightsReportComponent
  },
  {
    path: '',
    redirectTo: '/flights',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
