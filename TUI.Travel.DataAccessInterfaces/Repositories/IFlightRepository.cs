﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TUI.Travel.DataAccessInterfaces.Infrastructure;
using TUI.Travel.Model.Models;

namespace TUI.Travel.DataAccessInterfaces.Repositories
{
    public interface IFlightRepository : IRepository<Flight>
    {
        Task<IEnumerable<Flight>> GetFlightsByDepartureDateAsync(DateTime beginDate, DateTime endDate);
    }
}
