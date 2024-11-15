using MongoDB.Bson;
using MongoDB.Driver;
using ProductClusterTest.Core.Entities;
using ProductClusterTest.Core.Interfaces;

namespace ProductClusterTest.Infrastructure.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly MongoDbContext _context;

        public ProductRepository(MongoDbContext context)
        {
            _context = context;
        }
       
        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await _context.Products.Find(_ => true).ToListAsync();
        }
        public async Task<IEnumerable<Product>> GetByPriceAsync(decimal price)
        {
            return await _context.Products
                .Find(p => p.Price == price)
                .ToListAsync();
        }

        public async Task<Product> CreateAsync(Product product)
        {
            await _context.Products.InsertOneAsync(product);
            return product;
        }
    }
}