import { Airport } from './airport';

export class Flight {
    FlightId: number;
    Name: string;
    DepartureDate: Date;
    DepartureAirport: Airport;
    DepartureAirportName: string;
    DestinationAirport: Airport;
    DestinationAirportName: string;
    DistanceInKilometer: number;
    FuelConsumptionInLiter: number;

    constructor() {
        this.DestinationAirport = new Airport();
        this.DepartureAirport = new Airport();
    }
}

