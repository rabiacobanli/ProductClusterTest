using Microsoft.AspNetCore.Mvc;
using ProductClusterTest.Core.Entities;
using ProductClusterTest.Core.Interfaces;

namespace ProductClusterTest.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAll()
        {
            try
            {
                var products = await _productService.GetAllAsync();
                return Ok(products);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("{price}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetByPrice(decimal price)
        {
            try
            {
                var products = await _productService.GetByPriceAsync(price);
                return Ok(products);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Product>> Create([FromBody] Product product)
        {
            try
            {
                if (product == null)
                    return BadRequest("Product is null");

                var result = await _productService.CreateAsync(product);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
