var cart = [];

function getCart(item) {
let newObj = {
  itemName: item,
  itemPrice : Math.floor(Math.random() * (100 - 1 + 1)) + 1
  cart.push(newObj)
}
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
