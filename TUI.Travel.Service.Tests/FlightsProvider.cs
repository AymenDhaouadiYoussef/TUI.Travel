using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TUI.Travel.Model.Models;

namespace TUI.Travel.Service.Tests
{
    public class FlightsProvider
    {
        private static IList<Airport> GetAirports()
        {
            List<Airport> airports = new List<Airport>() {
                new Airport() { LatitudeInDecimalDegree = 49.010, LongitudeInDecimalDegree = 2.550, AltitudeInMeter = 119 },
                new Airport() { LatitudeInDecimalDegree = 50.140, LongitudeInDecimalDegree = 1.830, AltitudeInMeter = 67 },
                new Airport() { LatitudeInDecimalDegree = 47.410, LongitudeInDecimalDegree = -1.180, AltitudeInMeter = 33 },
                new Airport() { LatitudeInDecimalDegree = 47.640, LongitudeInDecimalDegree = 6.200, AltitudeInMeter = 380 },
                new Airport() { LatitudeInDecimalDegree = 48.750, LongitudeInDecimalDegree = -3.470, AltitudeInMeter = 88 },
                new Airport() { LatitudeInDecimalDegree = 43.990, LongitudeInDecimalDegree = 3.180, AltitudeInMeter = 794 }
            };

            return airports;
        }

        public static IList<Flight> GetNullFlights ()
        {
            IList<Airport> airports = GetAirports();

            var flights = new List<Flight>
            {
                new Flight() { DepartureAirport = airports[0], DestinationAirport = airports[0] },
                new Flight() { DepartureAirport = airports[1], DestinationAirport = airports[1] } ,
                new Flight() { DepartureAirport = airports[2], DestinationAirport = airports[2] }
            };

            return flights;
        }

        public static Flight GetNearFlight()
        {
            IList<Airport> airports = GetAirports();

            var flight = new Flight() { DepartureAirport = airports[0], DestinationAirport = airports[5] };

            return flight;
        }
    }
}
