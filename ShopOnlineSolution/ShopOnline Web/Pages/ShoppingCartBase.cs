using Microsoft.AspNetCore.Components;
using ShopOnline.Models.Dtos;
using ShopOnline.Web.Services.Contracts;

namespace ShopOnline.Web.Pages
{
    public class ShoppingCartBase : ComponentBase
    {
        [Parameter]
        public int Id { get; set; }
        [Inject]
        public IShoppingCartService ShoppingCartService { get; set; }
        [Inject]
        public IProductService ProductService { get; set; }
        public IEnumerable<CartItemDto> ShoppingCartItems { get; set; }
        public string ErrorMessage { get; set; }
        public string TotalPrice { get; set; }
        public int TotalQuantity { get; set; }
        protected async override Task OnInitializedAsync()
        {
            try
            {
                ShoppingCartItems = await ShoppingCartService.GetItems(HardCoded.UserId);
            }
            catch (Exception ex)
            {
                ErrorMessage = ex.Message;
            }
        }
        protected void UpdateQty_Input(int id)
        {
            throw new NotImplementedException();
        }
        protected async void UpdateQtyCartItem_Click(int id, int qty)
        {
            try
            {
                if (qty > 0)
                {
                    var updateItemDto = new CartItemQtyUpdateDto
                    {
                        CartItemId = id,
                        Qty = qty,
                    };
                    var returnedUpdateItemDto = await this.ShoppingCartService.UpdateQty(updateItemDto);
                }
                else
                {
                    var item = this.ShoppingCartItems.FirstOrDefault(i => i.Id == id);
                    if (item != null)
                    {
                        item.Qty = 1;
                        item.TotalPrice = item.Price;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        protected void DeleteCartItem_Click(int id)
        {
            var cartItemDto = ShoppingCartService.DeleteItem(id);
            if (cartItemDto != null) RemoveCartItem(id);
        }
        private void RemoveCartItem(int id)
        {
            var cartItemDto = ShoppingCartItems.FirstOrDefault(x => x.Id == id);  // Return CartItemDto having given Id property
            List<CartItemDto> cartItemsList = ShoppingCartItems.ToList();
            cartItemsList.Remove(cartItemDto);
            ShoppingCartItems = cartItemsList;
        }
    }
}
