import { addToCart, removeFromCart, createNewCart, totalCost } from "../New.js";
import { assert } from 'chai';

describe('Calculating total part 1', function(){
    it("Adding 2 Apples for $4.95 each and 1 Orange for $3.99 should return $13.89", function(){
        createNewCart();
        let newItem = {name: "Apple", price: 4.95, quantity: 2};
        let secondItem = {name: "Orange", price: 3.99, quantity: 1};
        addToCart(newItem);
        addToCart(secondItem);
        let result = totalCost();
        assert.equal(result, '13.89');
    });
});
describe('Calculating total part 2', function(){
    it("Adding 3 Apples for $4.95 each and then removing 1 Apple should return $9.90", function(){
        createNewCart();
        let newItem = {name: "Apple", price: 4.95, quantity: 3};
        addToCart(newItem);
        removeFromCart("Apple");
        let result = totalCost();
        assert.equal(result, '9.90');
    });
});

