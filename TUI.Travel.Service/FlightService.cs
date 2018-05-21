using System;
using System.Collections.Generic;
using System.Device.Location;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TUI.Travel.DataAccessInterfaces.Infrastructure;
using TUI.Travel.DataAccessInterfaces.Repositories;
using TUI.Travel.Model.Models;
using TUI.Travel.Model.Options;

namespace TUI.Travel.Service
{
    public interface IFlightService
    {
        Flight GetFlight(int id);
        IEnumerable<Flight> GetAllFlights();
        Task<IEnumerable<Flight>> GetFlightsByDepartureDateAsync(DateTime beginDate, DateTime endDate);
        void CreateFlight(Flight flight, AircraftOptions aircraftOptions);
        void UpdateFlight(Flight flight, AircraftOptions aircraftOptions);
        void DeleteFlight(Flight flight);
        void SaveFlight();
        Task SaveFlightAsync();
        double CalculateFlightDistanceInKilometer(Flight flight);
        double CalculateFuelConsumptionInLiter(Flight flight, AircraftOptions aircraftOptions);
    }
    public class FlightService : IFlightService
    {
        private readonly IFlightRepository flightRepository;
        private readonly IAirportRepository airportRepository;
        private readonly IUnitOfWork unitOfWork;

        public FlightService(IFlightRepository flightRepository, IAirportRepository airportRepository, IUnitOfWork unitOfWork)
        {
            this.flightRepository = flightRepository;
            this.airportRepository = airportRepository;
            this.unitOfWork = unitOfWork;
        }

        public Flight GetFlight(int id)
        {
            var flight = flightRepository.GetById(id);
            return flight;
        }

        public IEnumerable<Flight> GetAllFlights()
        {
            var flights = flightRepository.GetAll();
            return flights;
        }

        public async Task<IEnumerable<Flight>> GetFlightsByDepartureDateAsync(DateTime beginDate, DateTime endDate)
        {
            var flights = await flightRepository.GetFlightsByDepartureDateAsync(beginDate, endDate);
            return flights;
        }

        public void CreateFlight(Flight flight, AircraftOptions aircraftOptions)
        {
            flight.DepartureAirport = airportRepository.GetById(flight.DepartureAirportId);
            flight.DestinationAirport = airportRepository.GetById(flight.DestinationAirportId);
            flight.DistanceInKilometer = this.CalculateFlightDistanceInKilometer(flight);
            flight.FuelConsumptionInLiter = this.CalculateFuelConsumptionInLiter(flight, aircraftOptions);

            flightRepository.Add(flight);
        }

        public void UpdateFlight(Flight flight, AircraftOptions aircraftOptions)
        {
            flight.DepartureAirport = airportRepository.GetById(flight.DepartureAirportId);
            flight.DestinationAirport = airportRepository.GetById(flight.DestinationAirportId);
            flight.DistanceInKilometer = this.CalculateFlightDistanceInKilometer(flight);
            flight.FuelConsumptionInLiter = this.CalculateFuelConsumptionInLiter(flight, aircraftOptions);

            flightRepository.Update(flight);
        }

        public void DeleteFlight(Flight flight)
        {
            flightRepository.Delete(flight);
        }

        public void SaveFlight()
        {
            unitOfWork.Commit();
        }

        public async Task SaveFlightAsync()
        {
            await unitOfWork.CommitAsync();
        }

        public double CalculateFlightDistanceInKilometer(Flight flight)
        {
            GeoCoordinate departureAirportCoordinate = new GeoCoordinate(flight.DepartureAirport.LatitudeInDecimalDegree,
                                                                         flight.DepartureAirport.LongitudeInDecimalDegree,
                                                                         flight.DepartureAirport.AltitudeInMeter);
            GeoCoordinate destinationAirportCoordinate = new GeoCoordinate(flight.DestinationAirport.LatitudeInDecimalDegree,
                                                                         flight.DestinationAirport.LongitudeInDecimalDegree,
                                                                         flight.DestinationAirport.AltitudeInMeter);

            double distance = departureAirportCoordinate.GetDistanceTo(destinationAirportCoordinate);
            distance = distance / 1000;

            return distance;
        }

        public double CalculateFuelConsumptionInLiter(Flight flight, AircraftOptions aircraftOptions)
        {
            double fuelConsumptionInLiter = (flight.DistanceInKilometer * aircraftOptions.FuelConsumptionInLiterPerKilometer) + 
                                            aircraftOptions.TakeoffFuelConsumptionInLiter;

            return fuelConsumptionInLiter;
        }

    }
}
