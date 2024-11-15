using ProductClusterTest.Core.Entities;
using ProductClusterTest.Core.Interfaces;

namespace ProductClusterTest.Core.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;

        public ProductService(IProductRepository repository)
        {
            _repository = repository;
        }
  
        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }


        public async Task<IEnumerable<Product>> GetByPriceAsync(decimal price)
        {
            return await _repository.GetByPriceAsync(price);
        }

        public async Task<Product> CreateAsync(Product product)
        {
            product.AddedAt = DateTime.UtcNow;
            return await _repository.CreateAsync(product);
        }
    }
}