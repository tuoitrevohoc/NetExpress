using Microsoft.AspNetCore.Mvc;
using NetExpress.Core.Exceptions;
using NetExpress.Core.Models;
using NetExpress.Core.Repositories;

namespace NetExpress.Core.Controllers
{


    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="Entity"></typeparam>
    public class EditableResourceController<Entity>: ResourceController<Entity>
        where Entity: AppModel
    {

        /// <summary>
        /// 
        /// </summary>
        /// <param name="repository"></param>
        public EditableResourceController(IRepository<Entity> repository): base(repository)
        {
        }

        /// <summary>
        /// Create an entity
        /// </summary>
        /// <param name="entity"></param>
        [HttpPut]
        public Entity Create([FromBody] Entity entity)
        {
            if (!ModelState.IsValid)
            {
                throw new InvalidModelStateException(ModelState);
            }

            return repository.Save(entity);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        [HttpPost]
        public Entity Save([FromBody] Entity entity)
        {
            if (!ModelState.IsValid)
            {
                throw new InvalidModelStateException(ModelState);
            }

            return repository.Save(entity);
        }

        /// <summary>
        /// Delete an item
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public bool Delete(string id)
        {
            return repository.Delete(id);
        }
    }
}
