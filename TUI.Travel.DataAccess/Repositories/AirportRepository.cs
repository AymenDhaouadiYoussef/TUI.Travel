using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TUI.Travel.DataAccess.Infrastructure;
using TUI.Travel.DataAccessInterfaces.Repositories;
using TUI.Travel.Model.Models;

namespace TUI.Travel.DataAccess.Repositories
{
    public class AirportRepository : RepositoryBase<Airport>, IAirportRepository
    {
        public AirportRepository(TravelDbContext dbContext): base(dbContext)
        {}
    }
}
