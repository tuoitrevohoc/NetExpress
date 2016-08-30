using NetExpress.Core.Controllers;
using NetExpress.Models;
using NetExpress.Core.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace NetExpress.Controllers
{

    /// <summary>
    /// The user controllers
    /// </summary>
    [Route("api/users")]
    public class UserController : EditableResourceController<AppUser>
    {

        /// <summary>
        /// Create a base controller
        /// </summary>
        /// <param name="repository"></param>
        public UserController(IRepository<AppUser> repository) : base(repository)
        {
        }
    }
}
