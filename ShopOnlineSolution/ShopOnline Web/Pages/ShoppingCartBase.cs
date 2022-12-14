using Microsoft.AspNetCore.Components;
using ShopOnline.Models.Dtos;
using ShopOnline.Web.Services.Contracts;

namespace ShopOnline.Web.Pages
{
    public class ShoppingCartBase : ComponentBase
    {
        public int Id { get; set; }
        [Inject]
        public IShoppingCartService ShoppingCartService { get; set; }
        [Inject]
        public IProductService ProductService { get; set; }
        public IEnumerable<CartItemDto> ShoppingCartItems { get; set; }
        public NavigationManager NavigationManager { get; set; }
        public string ErrorMessage { get; set; }
        public string TotalPrice { get; set; }
        public int TotalQuantity { get; set; }
        protected async override Task OnInitializedAsync()
        {
            try
            {
                ShoppingCartItems = await ShoppingCartService.GetItems(HardCoded.UserId);
                NavigationManager.NavigateTo("/ShoppingCart");
            }
            catch (Exception ex)
            {
                ErrorMessage = ex.Message;
            }
        }
        protected void UpdateQty_Input(int Id)
        {
            throw new NotImplementedException();
        }
        protected void UpdateQtyCartItem_Click(int Id, int Qty)
        {
            throw new NotImplementedException();
        }
        protected void DeleteCartItem_Click(int Id)
        {
            throw new NotImplementedException();
        }
    }
}
