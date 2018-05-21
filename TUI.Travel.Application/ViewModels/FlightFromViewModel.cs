using System;
using System.ComponentModel.DataAnnotations;

namespace TUI.Travel.Application.ViewModels
{
    public class FlightFromViewModel
    {
        public int FlightId { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        public DateTime? DepartureDate { get; set; }

        [Required]
        public int? DepartureAirportId { get; set; }

        [Required]
        public int? DestinationAirportId { get; set; }
    }
}
