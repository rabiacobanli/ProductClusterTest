using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ProductClusterTest.Core.Entities;
using ProductClusterTest.Infrastructure.Settings;

namespace ProductClusterTest.Infrastructure.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(IOptions<MongoDbSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            _database = client.GetDatabase(settings.Value.DatabaseName);
        }

        public IMongoCollection<Product> Products => _database.GetCollection<Product>("Products");
    }
}
