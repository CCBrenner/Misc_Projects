using Microsoft.EntityFrameworkCore;
using ShopOnline.Api.Data;
using ShopOnline.Api.Entities;
using ShopOnline.Api.Respositories.Contracts;

namespace ShopOnline.Api.Respositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ShopOnlineDbContext shopOnlineDbContext;

        public ProductRepository(ShopOnlineDbContext shopOnlineDbContext)
        {
            this.shopOnlineDbContext = shopOnlineDbContext;
        }
        public async Task<IEnumerable<ProductCategory>> GetCategories() => 
            await this.shopOnlineDbContext.ProductCategories.ToListAsync();

        public async Task<ProductCategory> GetCategory(int id) =>
            await shopOnlineDbContext.ProductCategories.FindAsync(id);

        public async Task<Product> GetItem(int id) =>
            await shopOnlineDbContext.Products.FindAsync(id);

        public async Task<IEnumerable<Product>> GetItems() =>
            await this.shopOnlineDbContext.Products.ToListAsync();
    }
}
