using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TUI.Travel.DataAccessInterfaces.Infrastructure;

namespace TUI.Travel.DataAccess.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly TravelDbContext dbContext;

        public UnitOfWork(TravelDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void Commit()
        {
            this.dbContext.Commit();
        }

        public async Task CommitAsync()
        {
            await this.dbContext.CommitAsync();
        }
    }
}
