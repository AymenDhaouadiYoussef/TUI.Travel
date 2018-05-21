using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using TUI.Travel.DataAccess;
using TUI.Travel.DataAccessInterfaces.Infrastructure;
using TUI.Travel.DataAccess.Infrastructure;
using TUI.Travel.DataAccessInterfaces.Repositories;
using TUI.Travel.DataAccess.Repositories;
using TUI.Travel.Service;
using Microsoft.AspNetCore.Localization;
using TUI.Travel.Model.Options;
using AutoMapper;
using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Newtonsoft.Json.Serialization;

namespace TUI.Travel.Application
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddApplicationInsightsTelemetry(Configuration);

            services.Configure<AircraftOptions>(Configuration.GetSection("AircraftOptions"));
            services.AddScoped<TravelDbContext>(_ => new TravelDbContext(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IAirportRepository, AirportRepository>();
            services.AddScoped<IFlightRepository, FlightRepository>();
            services.AddScoped<IAirportService, AirportService>();
            services.AddScoped<IFlightService, FlightService>();
            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            services.AddResponseCaching(options =>
            {
                options.MaximumBodySize = 1024;
            });
            services.AddMvc()
                    .AddJsonOptions(options => {
                        options.SerializerSettings.ContractResolver = new DefaultContractResolver();
                        options.SerializerSettings.DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Utc;
                        });

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseApplicationInsightsRequestTelemetry();

            app.UseApplicationInsightsExceptionTelemetry();

            app.UseRequestLocalization(new RequestLocalizationOptions
            {
                DefaultRequestCulture = new RequestCulture("en-US")
            });

            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().AllowCredentials());

            app.UseResponseCaching();

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute(
                    name: "**",
                    template: "{*queryvalues}", 
                    defaults: new { controller = "Home", action = "Index"});
            });
        }
    }
}
