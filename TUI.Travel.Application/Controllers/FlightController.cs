using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TUI.Travel.Service;
using Microsoft.Extensions.Logging;
using TUI.Travel.Model.Models;
using TUI.Travel.Core;
using TUI.Travel.Model.Options;
using Microsoft.Extensions.Options;
using TUI.Travel.Application.ViewModels;
using AutoMapper;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TUI.Travel.Application.Controllers
{
    [Route("api/[controller]")]
    public class FlightController : Controller
    {
        private readonly IFlightService flightService;
        private readonly ILogger logger;
        private readonly AircraftOptions aircraftOptions;
        private readonly IMapper mapper;

        public FlightController(IFlightService flightService, ILogger<FlightController> logger, 
                                IOptions<AircraftOptions> aircraftOptionsAccessor, IMapper mapper)
        {
            this.flightService = flightService;
            this.logger = logger;
            aircraftOptions = aircraftOptionsAccessor.Value;
            this.mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Flight>), HttpStatusCodes.Success)]
        public IActionResult Get()
        {
            try
            {
                IEnumerable<Flight> flights = flightService.GetAllFlights();
                return Ok(flights);
            }
            catch (Exception ex)
            {
                logger.LogError(LoggingEvents.ListItems,
                    ex,
                    "Error on getting  all flights with departure date between {0} and {1}");
            }

            return new StatusCodeResult(HttpStatusCodes.InternalServerError);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Flight), HttpStatusCodes.Success)]
        public IActionResult Get(int id)
        {
            try
            {
                Flight flight = flightService.GetFlight(id);
                if (flight == null)
                    return NotFound();
                return Ok(flight);
            }
            catch (Exception ex)
            {
                logger.LogError(LoggingEvents.GetItem,
                    ex,
                    "Error on getting flight with identifier {0}", id);
            }

            return new StatusCodeResult(HttpStatusCodes.InternalServerError);
        }

        [HttpGet("{beginDate}/{endDate}")]
        [ProducesResponseType(typeof(IEnumerable<Flight>), HttpStatusCodes.Success)]
        public async Task<IActionResult> Get(DateTime beginDate, DateTime endDate)
        {
            try
            {
                beginDate = beginDate.ToUniversalTime();
                endDate = endDate.ToUniversalTime();
                IEnumerable<Flight> flights = await flightService.GetFlightsByDepartureDateAsync(beginDate, endDate);
                return Ok(flights);
            }
            catch (Exception ex)
            {
                logger.LogError(LoggingEvents.ListItems,
                    ex, 
                    "Error on getting flights with departure date between {0} and {1}",
                    beginDate.ToString("dd/MM/yyyy hh:mm:ss"),
                    endDate.ToString("dd/MM/yyyy hh:mm:ss"));
            }

            return new StatusCodeResult(HttpStatusCodes.InternalServerError);
        }

        [HttpPost]
        [ProducesResponseType(typeof(Flight), HttpStatusCodes.Created)]
        public IActionResult Post([FromBody]FlightFromViewModel flightFromViewModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                Flight flight = mapper.Map<Flight>(flightFromViewModel);
                flightService.CreateFlight(flight, aircraftOptions);
                flightService.SaveFlight();
                return CreatedAtAction("Get", "Flight", new { id = flight.FlightId }, flight);
            }
            catch (Exception ex)
            {
                logger.LogError(LoggingEvents.InsertItem,
                    ex,
                    "Error on inserting a new flight");
            }

            return new StatusCodeResult(HttpStatusCodes.InternalServerError);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(typeof(Flight), HttpStatusCodes.Success)]
        public IActionResult Put(int id, [FromBody]FlightFromViewModel flightFromViewModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                Flight flight = mapper.Map<Flight>(flightFromViewModel);
                flightService.UpdateFlight(flight, aircraftOptions);
                flightService.SaveFlight();
                return Ok(flight);
            }
            catch (Exception ex)
            {
                logger.LogError(LoggingEvents.UpdateItem,
                    ex,
                    "Error on updation flight with identifier {0}", id);
            }

            return new StatusCodeResult(HttpStatusCodes.InternalServerError);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Flight flight = flightService.GetFlight(id);
                if (flight == null)
                    return NotFound();
                flightService.DeleteFlight(flight);
                flightService.SaveFlight();
                return NoContent();
            }
            catch (Exception ex)
            {
                logger.LogError(LoggingEvents.DeleteItem,
                    ex,
                    "Error on deleting flight with identifier {0}", id);
            }

            return new StatusCodeResult(HttpStatusCodes.InternalServerError);
        }
    }
}
