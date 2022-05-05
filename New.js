var shoppingCart = [];

function addToCart(item) {
    shoppingCart.push(item);
}

function removeFromCart(item) {
    //searching for the item in the cart using .includes()
    if(shoppingCart.includes(item)) {
        const index = shoppingCart.indexOf(item);
        if( index > -1 ) {
            shoppingCart.splice(index, 1);
        }
        else{
            console.log("No item in the cart!");
        }
    }
    else{
        console.log("No such item");
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

// var newItem = {name: "Apple", price: 4.95, quantity: 2};
// //var secondItem = {name: Apple, price: 4.95, quantity: 1};
// var thirdItem = {name: "Orange", price: 3.99, quantity: 1};

// addToCart(newItem);
// //addToCart(secondItem);
// addToCart(thirdItem);
// console.log(shoppingCart);
// console.log(totalCost());

export {
    addToCart,
    removeFromCart,
    totalCost
};