var shoppingCart = [];

function addToCart(item) {
    shoppingCart.push(item);
}

function removeFromCart(itemName) {
    //searching for the item in the cart using .includes()
    for(var i = 0; i < shoppingCart.length; i++) {
     if(shoppingCart[i].name === itemName) {
             shoppingCart[i].quantity--;
            if(shoppingCart[i].quantity === 0) {
                shoppingCart.splice(shoppingCart[i], 1);
            }
            totalCost();
            break;
         }
     }
}

function removeAllFromCart() {
    while(shoppingCart.length > 0)
    {
        shoppingCart.pop();
    }
    totalCost();
}

function totalCost() {

    let total = 0

    for(var i = 0; i < shoppingCart.length; i++) {
        
        total = total + (shoppingCart[i].price * shoppingCart[i].quantity);
    }

    //need to round to two decimal places or else floating point might show a lot of decimal places
    return Math.round(total * 100) / 100;
}

var newItem = {name: "Apple", price: 4.95, quantity: 2};
var thirdItem = {name: "Orange", price: 3.99, quantity: 1};

// addToCart(newItem);
// addToCart(thirdItem);
// console.log(shoppingCart);
// removeAllFromCart();
// console.log(shoppingCart);
// removeFromCart("Apple");
// console.log(shoppingCart);
// console.log(totalCost());

export {
    addToCart,
    removeFromCart,
    removeAllFromCart,
    totalCost
};