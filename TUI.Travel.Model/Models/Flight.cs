using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TUI.Travel.Model.Models
{
    public class Flight
    {
        public int FlightId { get; set; }
        public string Name { get; set; }
        public DateTime DepartureDate { get; set; }
        public int DepartureAirportId { get; set; }
        public Airport DepartureAirport { get; set; }
        public int DestinationAirportId { get; set; }
        public Airport DestinationAirport { get; set; }
        public double DistanceInKilometer { get; set; }
        public double FuelConsumptionInLiter { get; set; }
    }
}
