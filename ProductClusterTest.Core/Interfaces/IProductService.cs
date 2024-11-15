using ProductClusterTest.Core.Entities;

namespace ProductClusterTest.Core.Interfaces
{
    public interface IProductService
    {        
        Task<IEnumerable<Product>> GetByPriceAsync(decimal price);
        Task<Product> CreateAsync(Product product);
    }
}
