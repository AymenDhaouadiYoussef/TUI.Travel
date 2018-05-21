using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using TUI.Travel.DataAccess.Infrastructure;
using TUI.Travel.DataAccessInterfaces.Repositories;
using TUI.Travel.Model.Models;

namespace TUI.Travel.DataAccess.Repositories
{
    public class FlightRepository : RepositoryBase<Flight>, IFlightRepository
    {
        public FlightRepository(TravelDbContext dbContext): base(dbContext)
        { }

        public override Flight GetById(int id)
        {
            return dbSet.Include(f => f.DepartureAirport)
                        .Include(f => f.DestinationAirport)
                        .Single(f => f.FlightId == id);
        }

        public override IEnumerable<Flight> GetAll()
        {
            IList<Flight> flights = this.dbSet
                                    .Include(f => f.DepartureAirport)
                                    .Include(f => f.DestinationAirport)
                                    .ToList();
            return flights;
        }

        public async Task<IEnumerable<Flight>> GetFlightsByDepartureDateAsync(DateTime beginDate, DateTime endDate)
        {
            IQueryable<Flight> query = this.dbSet
                                           .Include(f => f.DepartureAirport)
                                           .Include(f => f.DestinationAirport);

            if (beginDate > DateTime.MinValue)
                query = query.Where(f => f.DepartureDate >= beginDate);
            if (endDate > DateTime.MinValue)
                query = query.Where(f => f.DepartureDate <= endDate);

            IList<Flight> flights = await query.OrderByDescending(f => f.DepartureDate).ToListAsync();
            return flights;
        }
    }
}
