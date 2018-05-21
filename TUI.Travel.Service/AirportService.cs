using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TUI.Travel.DataAccessInterfaces.Infrastructure;
using TUI.Travel.DataAccessInterfaces.Repositories;
using TUI.Travel.Model.Models;

namespace TUI.Travel.Service
{
    public interface IAirportService
    {
        Airport GetAirport(int id);
        IEnumerable<Airport> GetAirports();
    }
    public class AirportService : IAirportService
    {
        private readonly IAirportRepository airportRepository;

        public AirportService(IAirportRepository airportRepository)
        {
            this.airportRepository = airportRepository;
        }

        public Airport GetAirport(int id)
        {
            var airport = airportRepository.GetById(id);
            return airport;
        }

        public IEnumerable<Airport> GetAirports()
        {
            var airports = airportRepository.GetAll();
            return airports;
        }
    }
}
