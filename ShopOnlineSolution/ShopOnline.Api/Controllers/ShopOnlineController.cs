using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopOnline.Api.Repositories.Contracts;
using ShopOnline.Api.Respositories.Contracts;
using ShopOnline.Models.Dtos;

namespace ShopOnline.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopOnlineController : ControllerBase
    {
        public ShopOnlineController(IShoppingCartRepository shoppingCartRepository,
                                    IProductRepository productRepository)
        {
            ShoppingCartRepository = shoppingCartRepository;
            ProductRepository = productRepository;
        }

        public IShoppingCartRepository ShoppingCartRepository { get; }
        public IProductRepository ProductRepository { get; }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CartItemDto>>> GetItems(int userId)
        {
            try
            {
                var cartItems = await this.ShoppingCartRepository.GetItems(userId);

                if (cartItems == null)
                {
                    return NoContent();
                }

                var products = await this.ProductRepository.GetItems();

                if(products == null)
                {
                    throw new Exception("No product exists in the system");
                }
            }
            catch (Exception ex)
            {
                throw new StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
