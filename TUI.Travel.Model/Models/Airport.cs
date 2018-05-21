using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace TUI.Travel.Model.Models
{
    public class Airport
    {
        public int AirportId { get; set; }
        public string Name { get; set; }
        public double LatitudeInDecimalDegree { get; set; }
        public double LongitudeInDecimalDegree { get; set; }
        public double AltitudeInMeter { get; set; }
    }
}
