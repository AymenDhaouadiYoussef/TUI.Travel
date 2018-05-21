using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TUI.Travel.DataAccess.Configuration;
using TUI.Travel.Model.Models;

namespace TUI.Travel.DataAccess
{
    public class TravelDbContext : DbContext
    {
        public TravelDbContext(string connString) : base(connString)
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<TravelDbContext, TUI.Travel.DataAccess.Migrations.Configuration>());
        }

        public DbSet<Flight> Flights { get; set; }
        public DbSet<Airport> Airports { get; set; }

        public void Commit()
        {
            base.SaveChanges();
        }

        public async Task CommitAsync()
        {
            await base.SaveChangesAsync();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new FlightConfiguration());
            modelBuilder.Configurations.Add(new AirportConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }

    public class TravelDbContextFactory : IDbContextFactory<TravelDbContext>
    {
        public TravelDbContext Create()
        {
            return new TravelDbContext("Server=(localdb)\\mssqllocaldb;Database=TuiTravel;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}
