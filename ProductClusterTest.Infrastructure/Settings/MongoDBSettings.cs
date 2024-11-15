using ProductClusterTest.Core.Entities;
using ProductClusterTest.Core.Interfaces;

namespace ProductClusterTest.Infrastructure.Settings
{
    public class MongoDbSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}