using ShopOnline.Models.Dtos;

namespace ShopOnline.Web.Services.Contracts
{
    public class IProductService
    {
        Task<IEnumerable<ProductDto>> GetItems();
    }
}
