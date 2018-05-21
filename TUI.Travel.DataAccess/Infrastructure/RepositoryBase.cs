using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TUI.Travel.DataAccessInterfaces.Infrastructure;

namespace TUI.Travel.DataAccess.Infrastructure
{
    public abstract class RepositoryBase<T> : IRepository<T> where T : class
    {
        protected readonly TravelDbContext dbContext;
        protected readonly IDbSet<T> dbSet;

        protected RepositoryBase(TravelDbContext dbContext)
        {
            this.dbContext = dbContext;
            dbSet = this.dbContext.Set<T>();
        }

        public virtual T GetById(int id)
        {
            return dbSet.Find(id);
        }

        public virtual IEnumerable<T> GetAll()
        {
            return dbSet.ToList();
        }

        public virtual void Add(T entity)
        {
            dbSet.Add(entity);
        }

        public virtual void Update(T entity)
        {
            dbSet.Attach(entity);
            dbContext.Entry(entity).State = EntityState.Modified;
        }

        public virtual void Delete(T entity)
        {
            dbSet.Remove(entity);
        }
    }
}
