using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TUI.Travel.Model.Models;

namespace TUI.Travel.DataAccess.Configuration
{
    public class FlightConfiguration : EntityTypeConfiguration<Flight>
    {
        public FlightConfiguration()
        {
            this.ToTable("Flight");
            this.Property(e => e.Name).HasMaxLength(50);
            this.HasRequired<Airport>(e => e.DepartureAirport).WithMany().HasForeignKey<int>(e => e.DepartureAirportId).WillCascadeOnDelete(false);
            this.HasRequired<Airport>(e => e.DestinationAirport).WithMany().HasForeignKey<int>(e => e.DestinationAirportId);
        }
    }
}
