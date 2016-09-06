using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using NetExpress.Core.Models;
using NetExpress.Core.Repositories;
using NetExpress.Core.Repositories.MongoDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetExpress.Core.Extensions
{
    /// <summary>
    /// add extension
    /// </summary>
    public static class IServiceCollectionExtensions
    {

        /// <summary>
        /// Use Mongo Connection
        /// </summary>
        /// <param name="uri"></param>
        /// <param name="databaseName"></param>
        public static void AddMongoDb(this IServiceCollection services, 
            string uri, string databaseName)
        {
            var client = new MongoClient(uri);
            var database = client.GetDatabase(databaseName);

            services.AddSingleton(database);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="Model"></typeparam>
        /// <param name="services"></param>
        /// <param name="collectionName"></param>
        public static void AddMongoRepository<Model>(
                this IServiceCollection services, 
                string collectionName)
            where Model: AppModel
        {
            services.AddSingleton<IRepository<Model>>(
                    context => 
                        new Repository<Model>(
                            context.GetService<IMongoDatabase>()
                            .GetCollection<Model>(collectionName)
                        )
                );

        }
    }
}
