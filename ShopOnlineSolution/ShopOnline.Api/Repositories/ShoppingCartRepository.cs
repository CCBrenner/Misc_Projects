using Microsoft.EntityFrameworkCore;
using ShopOnline.Api.Data;
using ShopOnline.Api.Entities;
using ShopOnline.Api.Repositories.Contracts;
using ShopOnline.Models.Dtos;

namespace ShopOnline.Api.Repositories
{
    public class ShoppingCartRepository : IShoppingCartRepository
    {
        public ShoppingCartRepository(ShopOnlineDbContext shopOnlineDbContext) => 
            ShopOnlineDbContext = shopOnlineDbContext;
        private ShopOnlineDbContext shopOnlineDbContext;
        public ShopOnlineDbContext ShopOnlineDbContext { get; }
        private async Task<bool> CartItemExists(int cartId, int productId) =>
            await this.ShopOnlineDbContext.CartItems.AnyAsync(c => c.CartId == cartId &&
                                                                   c.ProductId == productId);
        public async Task<CartItem> AddItem(CartItemToAddDto cartItemToAddDto)
        {
            if(await CartItemExists(cartItemToAddDto.CartId, cartItemToAddDto.ProductId) == false)
            {
                var item = await (from product in this.ShopOnlineDbContext.Products
                                  where product.Id == cartItemToAddDto.ProductId
                                  select new CartItem
                                  {
                                      CartId = cartItemToAddDto.CartId,
                                      ProductId = product.Id,
                                      Qty = cartItemToAddDto.Qty,
                                  }).SingleOrDefaultAsync();
                if (item != null)
                {
                    var result = await this.ShopOnlineDbContext.CartItems.AddAsync(item);
                    await this.ShopOnlineDbContext.SaveChangesAsync();
                    return result.Entity;
                }
            }

            return null;
        }

        public async Task<CartItem> GetItem(int id) => 
            await (from cart in this.shopOnlineDbContext.Carts
                   join cartItem in this.shopOnlineDbContext.CartItems
                   on cart.Id equals cartItem.Id
                   where cartItem.Id == id
                   select new CartItem
                       {
                           Id = cartItem.Id,
                           ProductId = cartItem.ProductId,
                           Qty = cartItem.Qty,
                           CartId = cartItem.CartId,
                       }).SingleOrDefaultAsync();

        public async Task<IEnumerable<CartItem>> GetItems(int userId)
        {
            return await (from cart in this.shopOnlineDbContext.Carts
                          join cartItem in this.shopOnlineDbContext.CartItems
                          on cart.Id equals cartItem.CartId
                          where cart.UserId == userId
                          select new CartItem
                          {
                              Id = cartItem.Id,
                              ProductId = cartItem.ProductId,
                              Qty = cartItem.Qty,
                              CartId = cartItem.CartId
                          }).ToListAsync();
        }

        public Task<CartItem> UpdateQty(int id, CartItemQtyUpdateDto quantityUpdateDto)
        {
            throw new NotImplementedException();
        }

        public Task<CartItem> DeleteItem(int id)
        {
            throw new NotImplementedException();
        }
    }
}
