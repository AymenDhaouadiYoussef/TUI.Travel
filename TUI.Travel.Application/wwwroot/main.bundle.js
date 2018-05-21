webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/airport.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Airport; });
var Airport = /** @class */ (function () {
    function Airport() {
    }
    return Airport;
}());



/***/ }),

/***/ "./src/app/airports/airports.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirportsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AirportsService = /** @class */ (function () {
    function AirportsService(http, loaderService) {
        this.http = http;
        this.loaderService = loaderService;
        this.airportAPIUrl = 'api/Airport';
    }
    AirportsService.prototype.getAirports = function () {
        var _this = this;
        this
            .loaderService
            .show();
        return this.http.get(this.airportAPIUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(function (_) { return _this.loaderService.hide(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('get airports')));
    };
    AirportsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error("failure on " + operation + " : " + error.message);
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    AirportsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__["a" /* LoaderService */]])
    ], AirportsService);
    return AirportsService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flights_flights_component__ = __webpack_require__("./src/app/flights/flights.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flight_detail_flight_detail_component__ = __webpack_require__("./src/app/flight-detail/flight-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flights_report_flights_report_component__ = __webpack_require__("./src/app/flights-report/flights-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'flights',
        component: __WEBPACK_IMPORTED_MODULE_2__flights_flights_component__["a" /* FlightsComponent */]
    }, {
        path: 'flightDetail/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__flight_detail_flight_detail_component__["a" /* FlightDetailComponent */]
    }, {
        path: 'newFlight',
        component: __WEBPACK_IMPORTED_MODULE_3__flight_detail_flight_detail_component__["a" /* FlightDetailComponent */]
    }, {
        path: 'flightsReport',
        component: __WEBPACK_IMPORTED_MODULE_4__flights_report_flights_report_component__["a" /* FlightsReportComponent */]
    },
    {
        path: '',
        redirectTo: '/flights',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-sm bg-info navbar-dark\">\n        <div class=\"navbar-brand\">\n            <i class=\"fa fa-plane fa-lg\"></i>\n        </div>\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\"  [class.active]=\"isFlights\" routerLink=\"/flights\">Flights</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\"  [class.active]=\"isReport\" routerLink=\"/flightsReport\">Report</a>\n            </li>\n        </ul>\n    </nav>\n</header>\n<div class=\"container-fluid mt-2\">\n    <router-outlet></router-outlet>\n</div>\n<app-loader></app-loader>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    Object.defineProperty(AppComponent.prototype, "isReport", {
        get: function () {
            return this.router.url.endsWith('flightsReport');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "isFlights", {
        get: function () {
            return this.router.url.endsWith('flights');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_generic_table_core__ = __webpack_require__("./node_modules/@angular-generic-table/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_generic_table_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__angular_generic_table_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__flights_flights_component__ = __webpack_require__("./src/app/flights/flights.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__flight_detail_flight_detail_component__ = __webpack_require__("./src/app/flight-detail/flight-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__flights_flights_service__ = __webpack_require__("./src/app/flights/flights.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__airports_airports_service__ = __webpack_require__("./src/app/airports/airports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tui_confirm_dialog_tui_confirm_dialog_component__ = __webpack_require__("./src/app/tui-confirm-dialog/tui-confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__flights_report_flights_report_component__ = __webpack_require__("./src/app/flights-report/flights-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__loader_loader_component__ = __webpack_require__("./src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__flights_flights_component__["a" /* FlightsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__flight_detail_flight_detail_component__["a" /* FlightDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__tui_confirm_dialog_tui_confirm_dialog_component__["a" /* TuiConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__flights_report_flights_report_component__["a" /* FlightsReportComponent */],
                __WEBPACK_IMPORTED_MODULE_20__loader_loader_component__["a" /* LoaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__angular_generic_table_core__["GenericTableModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__flights_flights_service__["a" /* FlightsService */], __WEBPACK_IMPORTED_MODULE_17__airports_airports_service__["a" /* AirportsService */], __WEBPACK_IMPORTED_MODULE_21__loader_loader_service__["a" /* LoaderService */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_18__tui_confirm_dialog_tui_confirm_dialog_component__["a" /* TuiConfirmDialogComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/flight-detail/flight-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/flight-detail/flight-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(flightForm)\" #flightForm=\"ngForm\">\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label for=\"Name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"Name\" placeholder=\"Flight name\" maxlength=\"50\"\n       name=\"Name\" [ngModel] = \"flight.Name\"  #name=\"ngModel\" required>\n      <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n        Name is required\n      </div>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label for=\"DepartureDate\">Departure date</label>\n      <input id=\"DepartureDate\" type=\"datetime-local\" class=\"form-control\"\n       name =\"DepartureDate\" [ngModel] = \"flight.DepartureDate | date:'yyyy-MM-ddThh:mm'\" #depDate=\"ngModel\" required>\n      <div [hidden]=\"depDate.valid || depDate.pristine\" class=\"alert alert-danger\">\n        Departure date is required\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <mat-form-field class=\"w-100\">\n        <input type=\"text\" placeholder=\"Departure airport\" matInput [formControl]=\"departureAirportControl\" [matAutocomplete]=\"autoDep\">\n        <mat-autocomplete #autoDep=\"matAutocomplete\">\n          <mat-option *ngFor=\"let airport of filteredDepartureAirports | async\" [value]=\"airport.Name\">\n            {{ airport.Name }}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <mat-form-field class=\"w-100\">\n        <input type=\"text\" placeholder=\"Destination airport\" matInput [formControl]=\"destinationAirportControl\" [matAutocomplete]=\"autoDes\">\n        <mat-autocomplete #autoDes=\"matAutocomplete\">\n          <mat-option *ngFor=\"let airport of filteredDestinationAirports | async\" [value]=\"airport.Name\">\n            {{ airport.Name }}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!flightForm.form.valid\">Save <i class=\"fa fa-save\"></i></button>\n  <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/flights\">Return <i class=\"fa fa-hand-o-left\"></i></button>\n</form>\n"

/***/ }),

/***/ "./src/app/flight-detail/flight-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flights_flights_service__ = __webpack_require__("./src/app/flights/flights.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__airports_airports_service__ = __webpack_require__("./src/app/airports/airports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flight__ = __webpack_require__("./src/app/flight.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flight_from_view_model__ = __webpack_require__("./src/app/flight-detail/flight-from-view-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FlightDetailComponent = /** @class */ (function () {
    function FlightDetailComponent(route, router, flightsService, airportsService, snackBar) {
        this.route = route;
        this.router = router;
        this.flightsService = flightsService;
        this.airportsService = airportsService;
        this.snackBar = snackBar;
        this.airports = [];
        this.departureAirportControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]();
        this.destinationAirportControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]();
        var id = this.route.snapshot.paramMap.get('id');
        this.flight = new __WEBPACK_IMPORTED_MODULE_7__flight__["a" /* Flight */]();
        if (id == null) {
            this.flight.DepartureDate = new Date();
        }
        else {
            this.flight.FlightId = Number(id);
        }
    }
    FlightDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAirports().subscribe(function (airports) {
            if (airports === undefined) {
                _this.openSnackBar('Error on getting airports');
                return;
            }
            _this.airports = airports;
            _this.filteredDepartureAirports = _this
                .departureAirportControl
                .valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (val) { return _this.filterAiports(val); }));
            _this.filteredDestinationAirports = _this
                .destinationAirportControl
                .valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (val) { return _this.filterAiports(val); }));
            if (_this.flight.FlightId > 0) {
                _this.flightsService.getFlight(_this.flight.FlightId).subscribe(function (f) {
                    if (f === undefined) {
                        _this.openSnackBar('Error on getting flight');
                        return;
                    }
                    _this.flight = f;
                    _this.flight.DepartureDate = new Date(_this.flight.DepartureDate);
                    _this.departureAirportControl.setValue(_this.flight.DepartureAirport.Name);
                    _this.destinationAirportControl.setValue(_this.flight.DestinationAirport.Name);
                });
            }
        });
    };
    FlightDetailComponent.prototype.getAirports = function () {
        return this.airportsService.getAirports();
    };
    FlightDetailComponent.prototype.filterAiports = function (val) {
        return this
            .airports
            .filter(function (airport) { return airport.Name.toLowerCase().includes(val.toLowerCase()); });
    };
    FlightDetailComponent.prototype.onSubmit = function (form) {
        var departureAirport = this.getAirportByName(this.departureAirportControl.value);
        if (departureAirport == null) {
            this.openSnackBar('A valid departure airport is required');
            return;
        }
        var destinationAirport = this.getAirportByName(this.destinationAirportControl.value);
        if (destinationAirport == null) {
            this.openSnackBar('A valid destination airport is required');
            return;
        }
        var flight = new __WEBPACK_IMPORTED_MODULE_8__flight_from_view_model__["a" /* FlightFromViewModel */]();
        flight.FlightId = this.flight.FlightId;
        flight.Name = form.value.Name;
        flight.DepartureDate = new Date(form.value.DepartureDate);
        flight.DepartureAirportId = departureAirport.AirportId;
        flight.DestinationAirportId = destinationAirport.AirportId;
        if (flight.FlightId > 0) {
            this.updateFlight(flight);
        }
        else {
            this.addFlight(flight);
        }
    };
    FlightDetailComponent.prototype.updateFlight = function (flight) {
        var _this = this;
        this.flightsService.updateFlight(flight).subscribe(function (f) {
            if (f === undefined) {
                _this.openSnackBar("Error on updating flight with name " + flight.Name);
                return;
            }
            _this.openSnackBar("Flight with name " + flight.Name + " updated with success", false);
            _this.router.navigate(['/flights']);
        });
    };
    FlightDetailComponent.prototype.addFlight = function (flight) {
        var _this = this;
        this.flightsService.addFlight(flight).subscribe(function (f) {
            if (f === undefined) {
                _this.openSnackBar("Error on adding flight with name " + flight.Name);
                return;
            }
            _this.openSnackBar("Flight with name " + flight.Name + " added with success", false);
            _this.router.navigate(['/flights']);
        });
    };
    FlightDetailComponent.prototype.getAirportByName = function (airportName) {
        var filtredTab = this.airports.filter(function (airport) { return airport.Name === airportName; });
        if (filtredTab.length === 0) {
            return null;
        }
        return filtredTab[0];
    };
    FlightDetailComponent.prototype.openSnackBar = function (msg, isError) {
        if (isError === void 0) { isError = true; }
        this
            .snackBar
            .open(msg, '', {
            duration: 4000,
            verticalPosition: 'top',
            panelClass: isError
                ? 'custom-error-class-snackbar'
                : 'custom-success-class-snackbar'
        });
    };
    FlightDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'app-flight-detail', template: __webpack_require__("./src/app/flight-detail/flight-detail.component.html"), styles: [__webpack_require__("./src/app/flight-detail/flight-detail.component.css")] }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__flights_flights_service__["a" /* FlightsService */], __WEBPACK_IMPORTED_MODULE_6__airports_airports_service__["a" /* AirportsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatSnackBar */]])
    ], FlightDetailComponent);
    return FlightDetailComponent;
}());



/***/ }),

/***/ "./src/app/flight-detail/flight-from-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightFromViewModel; });
var FlightFromViewModel = /** @class */ (function () {
    function FlightFromViewModel() {
    }
    return FlightFromViewModel;
}());



/***/ }),

/***/ "./src/app/flight.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__airport__ = __webpack_require__("./src/app/airport.ts");

var Flight = /** @class */ (function () {
    function Flight() {
        this.DestinationAirport = new __WEBPACK_IMPORTED_MODULE_0__airport__["a" /* Airport */]();
        this.DepartureAirport = new __WEBPACK_IMPORTED_MODULE_0__airport__["a" /* Airport */]();
    }
    return Flight;
}());



/***/ }),

/***/ "./src/app/flights-report/flights-report.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/flights-report/flights-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-1 align-self-center\">\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" routerLink=\"/flights\">\n            Return <i class=\"fa fa-hand-o-left\"></i>\n        </button>\n    </div>\n    <div class=\"col-11\">\n        <h1 class=\"display-4 text-center\">Flights report</h1>\n    </div>\n</div>\n<div class=\"mt-2\">\n    <div class=\"card mt-1\" *ngFor=\"let flight of flights\">\n        <h5 class=\"card-header\">\n            <span class=\"badge badge-secondary\">{{flight.Name}}</span>\n            <i class=\"fa fa-plane fa-lg ml-2\" aria-hidden=\"true\"></i>\n        </h5>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <h6>Departure date</h6>\n                    <span>{{flight.DepartureDate.toLocaleDateString() + ' ' + flight.DepartureDate.toLocaleTimeString()}}</span>\n                </div>\n                <div class=\"col-md-4\">\n                    <h6>Departure airport</h6>\n                    <span>{{flight.DepartureAirport.Name}}</span>\n                </div>\n                <div class=\"col-md-4\">\n                    <h6>Destination airport</h6>\n                    <span>{{flight.DestinationAirport.Name}}</span>\n                </div>\n            </div>\n            <div class=\"row mt-2\">\n                <div class=\"col-md-4\">\n                    <h6>Distance (KM)</h6>\n                    <span>{{flight.DistanceInKilometer.toFixed(2)}}</span>\n                </div>\n                <div class=\"col-md-4\">\n                    <h6>Fuel consumption (L)</h6>\n                    <span>{{flight.FuelConsumptionInLiter.toFixed(2)}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/flights-report/flights-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flights_flights_service__ = __webpack_require__("./src/app/flights/flights.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightsReportComponent = /** @class */ (function () {
    function FlightsReportComponent(flightsService, snackBar) {
        this.flightsService = flightsService;
        this.snackBar = snackBar;
    }
    FlightsReportComponent.prototype.ngOnInit = function () {
        this.getFlights();
    };
    FlightsReportComponent.prototype.getFlights = function () {
        var _this = this;
        this.flightsService.getFlights().subscribe(function (flights) {
            if (flights === undefined) {
                _this.openSnackBar('Error on getting flights');
                return;
            }
            flights.forEach(function (f) {
                f.DepartureDate = new Date(f.DepartureDate);
            });
            _this.flights = flights;
        });
    };
    FlightsReportComponent.prototype.openSnackBar = function (msg, isError) {
        if (isError === void 0) { isError = true; }
        this
            .snackBar
            .open(msg, '', {
            duration: 4000,
            verticalPosition: 'top',
            panelClass: isError ? 'custom-error-class-snackbar' : 'custom-success-class-snackbar'
        });
    };
    FlightsReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flights-report',
            template: __webpack_require__("./src/app/flights-report/flights-report.component.html"),
            styles: [__webpack_require__("./src/app/flights-report/flights-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__flights_flights_service__["a" /* FlightsService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSnackBar */]])
    ], FlightsReportComponent);
    return FlightsReportComponent;
}());



/***/ }),

/***/ "./src/app/flights/flights.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/flights/flights.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"card\">\n      <div class=\"card-header\">Period of flights</div>\n      <div class=\"card-body\">\n        <form (ngSubmit)=\"onSubmitPeriod(periodForm)\" #periodForm=\"ngForm\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-4 align-self-end\">\n                <div [hidden]=\"begDate.valid || begDate.pristine\" class=\"alert alert-danger\">\n                    Begin date is required\n                </div>\n              <label class=\"col-form-label col-form-label-sm\" for=\"beginDate\">Begin Date</label>\n              <input id=\"beginDate\" type=\"datetime-local\" class=\"form-control form-control-sm\" \n               name =\"beginDate\" [ngModel] = \"beginDate | date:'yyyy-MM-ddThh:mm'\" #begDate=\"ngModel\" required>\n            </div>\n            <div class=\"form-group col-md-4 align-self-end\">\n                <div [hidden]=\"endedDate.valid || endedDate.pristine\" class=\"alert alert-danger\">\n                    End date is required\n                </div>\n                <label class=\"col-form-label col-form-label-sm\" for=\"endDate\">End Date</label>\n                <input id=\"endDate\" type=\"datetime-local\" class=\"form-control form-control-sm\" \n                 name =\"endDate\" [ngModel] = \"endDate | date:'yyyy-MM-ddThh:mm'\" #endedDate=\"ngModel\" required>\n            </div>\n            <div class=\"form-group col-md-4 align-self-end\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!periodForm.form.valid\">Go</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"card mt-1\">\n      <div class=\"card-header\">flights</div>\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-5\">\n              <mat-form-field class=\"w-100\">\n                  <input type=\"text\" placeholder=\"Airport\" matInput [formControl]=\"airportControl\" [matAutocomplete]=\"autoAir\">\n                  <mat-autocomplete #autoAir=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let airport of filteredAirports | async\" [value]=\"airport.Name\">\n                      {{ airport.Name }}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n            </div>\n            <div class=\"form-group col-md-2 align-self-center\">\n              <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn btn-primary btn-sm\" id=\"dropdownActions\" ngbDropdownToggle>Actions</button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownActions\">\n                  <button type=\"button\" class=\"dropdown-item\" routerLink=\"/newFlight\">Add new flight</button>\n                  <button type=\"button\" class=\"dropdown-item\" (click) = \"airportControl.setValue('')\">Remove filter</button>\n                  <button type=\"button\" class=\"dropdown-item\" (click)=\"myTable.exportCSV()\">Export to CSV</button>\n                  <button type=\"button\" class=\"dropdown-item\" routerLink=\"/flightsReport\">View flights report</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"table-responsive\">\n          <generic-table [gtClasses]=\"'table-hover table-striped table'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\"\n            [gtData]=\"configObject.data\" [gtOptions]=\"{numberOfRows:5, stack:true, highlightSearch:true, rowSelection:true}\"></generic-table>\n        </div>\n        <div class=\"text-center\">\n          <gt-pagination [gtClasses]=\"'justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/flights/flights.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_generic_table_core__ = __webpack_require__("./node_modules/@angular-generic-table/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_generic_table_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_generic_table_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flights_service__ = __webpack_require__("./src/app/flights/flights.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__airports_airports_service__ = __webpack_require__("./src/app/airports/airports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flight__ = __webpack_require__("./src/app/flight.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tui_confirm_dialog_tui_confirm_dialog_component__ = __webpack_require__("./src/app/tui-confirm-dialog/tui-confirm-dialog.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RowData = /** @class */ (function (_super) {
    __extends(RowData, _super);
    function RowData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RowData;
}(__WEBPACK_IMPORTED_MODULE_8__flight__["a" /* Flight */]));
var FlightsComponent = /** @class */ (function () {
    function FlightsComponent(flightsService, airportsService, router, dialog, snackBar) {
        var _this = this;
        this.flightsService = flightsService;
        this.airportsService = airportsService;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.configObject = {
            settings: [],
            fields: [],
            data: []
        };
        this.airports = [];
        this.airportControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
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
                    sort: function (row) {
                        return row.DepartureDate.valueOf();
                    },
                    render: function (row) {
                        return row.DepartureDate.toLocaleDateString() + " " + row.DepartureDate.toLocaleTimeString();
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
                        return "" + row.DistanceInKilometer.toFixed(2);
                    }
                },
                {
                    objectKey: 'FuelConsumptionInLiter',
                    name: 'Fuel consumption (L)',
                    columnClass: 'sort-numeric text-right',
                    render: function (row) {
                        return "" + row.FuelConsumptionInLiter.toFixed(2);
                    }
                },
                {
                    objectKey: 'edit_action',
                    name: '',
                    columnClass: 'gt-button',
                    value: function () { return ''; },
                    render: function (row) {
                        // tslint:disable-next-line:max-line-length
                        return "<button class=\"btn btn-sm btn-primary\"><i class=\"fa fa-pencil\"></i></button>";
                    },
                    click: function (row) { return _this.redirectToFlightDetail(row); }
                },
                {
                    objectKey: 'delete_action',
                    name: '',
                    columnClass: 'gt-button',
                    value: function () { return ''; },
                    render: function () { return "<button class=\"btn btn-sm btn-danger\"><i class=\"fa fa-trash-o\"></i></button>"; },
                    click: function (row) { return _this.openDeleteDialog(row); }
                }
            ],
            data: []
        };
    }
    FlightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAirports().subscribe(function (airports) {
            if (airports === undefined) {
                _this.openSnackBar('Error on getting airports');
                return;
            }
            _this.airports = airports;
            _this.filteredAirports = _this
                .airportControl
                .valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* tap */])(function (val) {
                _this.myTable.gtSearch(val);
            }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (val) { return _this.filterAiports(val); }));
            _this.getFlights();
        });
    };
    FlightsComponent.prototype.getFlights = function () {
        var _this = this;
        this.flightsService
            .getFlightsByDepartureDate(this.beginDate, this.endDate)
            .subscribe(function (flights) {
            if (flights === undefined) {
                _this.openSnackBar('Error on getting flights');
                return;
            }
            flights.forEach(function (f) {
                f.DepartureDate = new Date(f.DepartureDate);
                f.DepartureAirportName = f.DepartureAirport.Name;
                f.DestinationAirportName = f.DestinationAirport.Name;
            });
            _this.configObject.data = flights;
        });
    };
    FlightsComponent.prototype.getAirports = function () {
        return this.airportsService.getAirports();
    };
    FlightsComponent.prototype.filterAiports = function (val) {
        return this
            .airports
            .filter(function (airport) { return airport.Name.toLowerCase().includes(val.toLowerCase()); });
    };
    FlightsComponent.prototype.onSubmitPeriod = function (form) {
        this.beginDate = new Date(form.value.beginDate);
        this.endDate = new Date(form.value.endDate);
        this.getFlights();
    };
    FlightsComponent.prototype.redirectToFlightDetail = function (flight) {
        this.router.navigateByUrl("/flightDetail/" + flight.FlightId);
    };
    FlightsComponent.prototype.openDeleteDialog = function (row) {
        var _this = this;
        var dialogRef = this.dialog
            .open(__WEBPACK_IMPORTED_MODULE_9__tui_confirm_dialog_tui_confirm_dialog_component__["a" /* TuiConfirmDialogComponent */], {
            width: '',
            hasBackdrop: true,
            data: {
                title: "Confirm",
                message: "Do you want to delete the flight " + row.Name
            }
        });
        dialogRef
            .afterClosed()
            .subscribe(function (result) {
            if (result === 'Ok') {
                _this.deleteFlight(row);
            }
        });
    };
    FlightsComponent.prototype.deleteFlight = function (flight) {
        var _this = this;
        this.flightsService.deleteFlight(flight.FlightId)
            .subscribe(function (result) {
            if (result === undefined) {
                _this.openSnackBar("Error on deleting flight " + flight.Name);
                return;
            }
            _this.configObject.data = _this.myTable
                .gtDelete('FlightId', flight.FlightId);
        });
    };
    FlightsComponent.prototype.openSnackBar = function (msg, isError) {
        if (isError === void 0) { isError = true; }
        this
            .snackBar
            .open(msg, '', {
            duration: 4000,
            verticalPosition: 'top',
            panelClass: isError ? 'custom-error-class-snackbar' : 'custom-success-class-snackbar'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_generic_table_core__["GenericTableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_generic_table_core__["GenericTableComponent"])
    ], FlightsComponent.prototype, "myTable", void 0);
    FlightsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flights',
            template: __webpack_require__("./src/app/flights/flights.component.html"),
            styles: [__webpack_require__("./src/app/flights/flights.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__flights_service__["a" /* FlightsService */], __WEBPACK_IMPORTED_MODULE_7__airports_airports_service__["a" /* AirportsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatSnackBar */]])
    ], FlightsComponent);
    return FlightsComponent;
}());



/***/ }),

/***/ "./src/app/flights/flights.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var FlightsService = /** @class */ (function () {
    function FlightsService(http, loaderService) {
        this.http = http;
        this.loaderService = loaderService;
        this.flightAPIUrl = 'api/Flight';
    }
    FlightsService.prototype.getFlights = function () {
        var _this = this;
        this
            .loaderService
            .show();
        return this.http.get(this.flightAPIUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(function (_) { return _this.loaderService.hide(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('get all flights')));
    };
    FlightsService.prototype.getFlightsByDepartureDate = function (beginDate, endDate) {
        var _this = this;
        var url = this
            .flightAPIUrl + "/" + beginDate
            .toISOString() + "/" + endDate
            .toISOString();
        this
            .loaderService
            .show();
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(function (_) { return _this.loaderService.hide(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('get flights by departure date')));
    };
    FlightsService.prototype.getFlight = function (id) {
        var _this = this;
        var url = this.flightAPIUrl + "/" + id;
        this
            .loaderService
            .show();
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(function (_) { return _this.loaderService.hide(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("get flight id=" + id)));
    };
    FlightsService.prototype.addFlight = function (flight) {
        var _this = this;
        this
            .loaderService
            .show();
        return this.http.post(this.flightAPIUrl, flight, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(function (_) { return _this.loaderService.hide(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('add flight')));
    };
    FlightsService.prototype.updateFlight = function (flight) {
        var _this = this;
        var url = this.flightAPIUrl + "/" + flight.FlightId;
        this
            .loaderService
            .show();
        return this
            .http
            .put(url, flight, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(function (_) { return _this.loaderService.hide(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("update flight id=" + flight.FlightId)));
    };
    FlightsService.prototype.deleteFlight = function (id) {
        var _this = this;
        var url = this.flightAPIUrl + "/" + id;
        this
            .loaderService
            .show();
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(function (_) { return _this.loaderService.hide(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("delete flight id=" + id)));
    };
    FlightsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error, caught) {
            console.error("failure on " + operation + " : " + error.message);
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    FlightsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__["a" /* LoaderService */]])
    ], FlightsService);
    return FlightsService;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/***/ (function(module, exports) {

module.exports = ".loader-background {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #808080;\r\n  opacity: .4;\r\n}\r\n\r\n.loader-content {\r\n  position: fixed;\r\n  z-index: 2000;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-image: url('/assets/ajax-loader.gif');\r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n}\r\n"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show\" class=\"loader-background\">\n</div>\n<div *ngIf=\"show\" class=\"loader-content\">\n</div>\n\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this
            .loaderService
            .loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(LoaderService.prototype, "loaderState", {
        get: function () {
            return this
                .loaderSubject
                .asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/tui-confirm-dialog/tui-confirm-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tui-confirm-dialog/tui-confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n<p>{{data.message}}</p>\n</div>\n<div class=\"pull-right\" mat-dialog-actions>\n    <button type=\"button\" class=\"btn btn-info btn-sm\" mat-dialog-close cdkFocusInitial>Cancel</button>\n    <button type=\"button\" class=\"btn btn-info btn-sm ml-1\" [mat-dialog-close]=\"'Ok'\">Ok</button>\n</div>\n"

/***/ }),

/***/ "./src/app/tui-confirm-dialog/tui-confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TuiConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TuiConfirmDialogComponent = /** @class */ (function () {
    function TuiConfirmDialogComponent(data) {
        this.data = data;
    }
    TuiConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    TuiConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tui-confirm-dialog',
            template: __webpack_require__("./src/app/tui-confirm-dialog/tui-confirm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/tui-confirm-dialog/tui-confirm-dialog.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], TuiConfirmDialogComponent);
    return TuiConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map