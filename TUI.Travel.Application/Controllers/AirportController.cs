using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TUI.Travel.Service;
using Microsoft.Extensions.Logging;
using TUI.Travel.Model.Models;
using TUI.Travel.Core;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TUI.Travel.Application.Controllers
{
    [Route("api/[controller]")]
    public class AirportController : Controller
    {
        private readonly IAirportService airportService;
        private readonly ILogger logger;

        public AirportController(IAirportService airportService, ILogger<FlightController> logger)
        {
            this.airportService = airportService;
            this.logger = logger;
        }

        [ResponseCache(Duration = 120)]
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Airport>), HttpStatusCodes.Success)]
        public IActionResult Get()
        {
            try
            {
                IEnumerable<Airport> airports = airportService.GetAirports();
                return Ok(airports);
            }
            catch (Exception ex)
            {
                logger.LogError(LoggingEvents.GetItem,
                                    ex,
                                    "Error on getting airports");
            }

            return new StatusCodeResult(HttpStatusCodes.InternalServerError);
        }
    }
}
