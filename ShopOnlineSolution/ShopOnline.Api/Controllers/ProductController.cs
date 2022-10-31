using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopOnline.Api.Extensions;
using ShopOnline.Api.Respositories.Contracts;
using ShopOnline.Models.Dtos;

namespace ShopOnline.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository productRespository;

        public ProductController(IProductRepository productRespository)
        {
            this.productRespository = productRespository;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductDto>>> GetItems()
        {
            try
            {
                var products = await this.productRespository.GetItems();
                var productCategories = await this.productRespository.GetItems();

                if (products == null || productCategories == null)
                {
                    return NotFound();
                }
                else
                {
                    IEnumerable<ProductDto> productDtos = products.ConvertToDto((IEnumerable<Entities.ProductCategory>)productCategories);
                    return Ok(productDtos);
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database.");
            }
        }
    }
}
