using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TUI.Travel.DataAccessInterfaces.Infrastructure;
using TUI.Travel.DataAccessInterfaces.Repositories;
using TUI.Travel.Model.Models;
using TUI.Travel.Model.Options;
using Xunit;

namespace TUI.Travel.Service.Tests
{
    public class FlightServiceTests
    {
        private readonly IFlightRepository flightRepository;
        private readonly IAirportRepository airportRepository;
        private readonly IUnitOfWork unitOfWork;

        public FlightServiceTests()
        {
            var mockFlightRepository = new Mock<IFlightRepository>();
            flightRepository = mockFlightRepository.Object;

            var mockAirportRepository = new Mock<IAirportRepository>();
            airportRepository = mockAirportRepository.Object;

            var mockUnitOfWork = new Mock<IUnitOfWork>();
            unitOfWork = mockUnitOfWork.Object;
        }

        public static IEnumerable<object[]> GetNullFlightsForSequenceOfTests(int numberOfTests)
        {
            var flights = FlightsProvider.GetNullFlights();

            var allData = new List<object[]>
            {
                new object[] { flights[0] },
                new object[] { flights[1] },
                new object[] { flights[2] }
            };

            return allData.Take(numberOfTests);
        }

        [Theory]
        [MemberData(nameof(GetNullFlightsForSequenceOfTests), 2)]
        public void CalculateFlightDistanceInKilometer_SameAirport_GetDistanceZero(Flight flight)
        {
            //
            // Arrange
            FlightService flightService = new FlightService(flightRepository, airportRepository, unitOfWork);
            //
            // Act
            var result = flightService.CalculateFlightDistanceInKilometer(flight);
            //
            // Assert
            Assert.Equal(0, result);
        }

        [Fact]
        public void CalculateFlightDistanceInKilometer_NearFlight_GetDistance()
        {
            //
            // Arrange
            Flight flight = FlightsProvider.GetNearFlight();
            FlightService flightService = new FlightService(flightRepository, airportRepository, unitOfWork);
            //
            // Act
            var result = flightService.CalculateFlightDistanceInKilometer(flight);
            //
            // Assert
            Assert.Equal(561, Math.Round(result));
        }

        [Fact]
        public void CalculateFuelConsumptionInLiter_NearFlight_GetFuelConsumption()
        {
            //
            // Arrange
            Flight flight = FlightsProvider.GetNearFlight();
            AircraftOptions aircraftOptions = new AircraftOptions() { FuelConsumptionInLiterPerKilometer = 3.628, TakeoffFuelConsumptionInLiter = 2.392 };
            FlightService flightService = new FlightService(flightRepository, airportRepository, unitOfWork);
            flight.DistanceInKilometer = flightService.CalculateFlightDistanceInKilometer(flight);
            //
            // Act
            var result = flightService.CalculateFuelConsumptionInLiter(flight, aircraftOptions);
            //
            // Assert
            Assert.Equal(2037, Math.Round(result));
        }
    }
}
