using ProductClusterTest.Core.Entities;

namespace ProductClusterTest.Core.Interfaces
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllAsync();
        Task<IEnumerable<Product>> GetByPriceAsync(decimal price);
        Task<Product> CreateAsync(Product product);
    }
}





