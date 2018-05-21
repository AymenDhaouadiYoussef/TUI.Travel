using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TUI.Travel.Application.ViewModels;
using TUI.Travel.Model.Models;

namespace TUI.Travel.Application.Mappings
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<FlightFromViewModel, Flight>();
        }
    }
}
