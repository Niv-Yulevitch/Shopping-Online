export const environment = {
    production: true,
    
    // auth: 
    emailAndIdNumberUniqueUrl: 'http://localhost:3001/api/auth/check-if-email-or-id-is-unique/',
    registerUrl: 'http://localhost:3001/api/auth/register/',
    loginUrl: 'http://localhost:3001/api/auth/login/',

    // categories: 
    categoriesUrl: 'http://localhost:3001/api/categories/',

    // products: 
    productsUrl: 'http://localhost:3001/api/products/',
    productsImageUrl: 'http://localhost:3001/shopping/images/',

    //carts
    cartByUserUrl: 'http://localhost:3001/api/cart-by-user/',  //to display when user's cart was createdAt 

    // cart items 
    cartItemsUrl: 'http://localhost:3001/api/items/',
    cartItemsByCartUrl: 'http://localhost:3001/api/items-by-cart/',  //to display all items in user's current cart

    //  orders: 
    ordersUrl: 'http://localhost:3001/api/orders/'
};
