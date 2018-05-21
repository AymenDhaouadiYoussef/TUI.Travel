namespace TUI.Travel.DataAccess.Migrations
{
    using Model.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<TravelDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(TravelDbContext context)
        {
            if (!context.Airports.Any())
            {
                context.Airports.AddOrUpdate(
                    new Airport() { Name = "Paris-Charles-de-Gaulle", LatitudeInDecimalDegree = 49.010, LongitudeInDecimalDegree = 2.550, AltitudeInMeter = 119 },
                    new Airport() { Name = "Abbeville", LatitudeInDecimalDegree = 50.140, LongitudeInDecimalDegree = 1.830, AltitudeInMeter = 67 },
                    new Airport() { Name = "Ancenis", LatitudeInDecimalDegree = 47.410, LongitudeInDecimalDegree = -1.180, AltitudeInMeter = 33 },
                    new Airport() { Name = "Bale mulhouse", LatitudeInDecimalDegree = 47.590, LongitudeInDecimalDegree = 7.530, AltitudeInMeter = 269 },
                    new Airport() { Name = "Biard", LatitudeInDecimalDegree = 46.590, LongitudeInDecimalDegree = 0.310, AltitudeInMeter = 45 },
                    new Airport() { Name = "Calais dunkerque", LatitudeInDecimalDegree = 50.960, LongitudeInDecimalDegree = 1.950, AltitudeInMeter = 3 },
                    new Airport() { Name = "Cote d'azur", LatitudeInDecimalDegree = 43.660, LongitudeInDecimalDegree = 7.220, AltitudeInMeter = 3 },
                    new Airport() { Name = "Frotey", LatitudeInDecimalDegree = 47.640, LongitudeInDecimalDegree = 6.200, AltitudeInMeter = 380 },
                    new Airport() { Name = "Lannion", LatitudeInDecimalDegree = 48.750, LongitudeInDecimalDegree = -3.470, AltitudeInMeter = 88 },
                    new Airport() { Name = "Larzac", LatitudeInDecimalDegree = 43.990, LongitudeInDecimalDegree = 3.180, AltitudeInMeter = 794 }
                    );
            }
            
        }
    }
}
