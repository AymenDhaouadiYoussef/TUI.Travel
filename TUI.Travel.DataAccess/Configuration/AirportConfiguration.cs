using System.Data.Entity.ModelConfiguration;
using TUI.Travel.Model.Models;

namespace TUI.Travel.DataAccess.Configuration
{
    public class AirportConfiguration : EntityTypeConfiguration<Airport>
    {
        public AirportConfiguration()
        {
            this.ToTable("Airport");
            this.Property(e => e.Name).HasMaxLength(50);
            this.Property<double>(e => e.LatitudeInDecimalDegree).IsRequired();
            this.Property<double>(e => e.LongitudeInDecimalDegree).IsRequired();
            this.Property<double>(e => e.AltitudeInMeter).IsRequired();
        }
    }
}
