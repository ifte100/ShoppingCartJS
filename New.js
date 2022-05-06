var shoppingCart = [];

function addToCart(item) {
    shoppingCart.push(item);
}

function removeFromCart(itemName) {
    //iterating through all the items in the cart
    for(var i = 0; i < shoppingCart.length; i++) {
     if(shoppingCart[i].name === itemName) {
             shoppingCart[i].quantity--;
            if(shoppingCart[i].quantity === 0) {
                shoppingCart.splice(shoppingCart[i], 1);
            }
            //recalculating the cost after removing an item
            totalCost();
            break;
         }
     }
}

function createNewCart() {
    //if new cart is empty then no point of running the while loop, best case O(1) 
    if(shoppingCart.length === 0){
        return;
    }
    else {
        while(shoppingCart.length > 0){
            shoppingCart.pop();
        }
        totalCost();
    }
}

function totalCost() {

    let total = 0

    for(var i = 0; i < shoppingCart.length; i++) {
        
        total = total + (shoppingCart[i].price * shoppingCart[i].quantity);
    }

    //need to round to two decimal places or else floating point might show a lot of decimal places
    return Math.round(total * 100) / 100;
}

export {
    addToCart,
    removeFromCart,
    createNewCart,
    totalCost
};