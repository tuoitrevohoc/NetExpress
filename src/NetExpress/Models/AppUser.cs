using NetExpress.Core.Models;
using System.ComponentModel.DataAnnotations;

namespace NetExpress.Models
{

    /// <summary>
    /// use the models
    /// </summary>
    public class AppUser: AppModel
    {

        /// <summary>
        /// the username
        /// </summary>
        [StringLength(32, MinimumLength = 6)]
        public string UserName { get; set; }

    }
}
