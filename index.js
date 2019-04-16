var cart = [];

function getCart(item) {

 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newObj = {
   itemName: item,
   itemPrice : Math.floor(Math.random() * (100 - 1 + 1)) + 1
 };
 cart.push(newObj)
return `${newObj["itemName"]} has been added to your cart.`
}

function viewCart() {
let items = " ";
	if(cart.length < 1){
    return "Your shopping cart is empty."
  }
for(let i = 0; i < cart.length; i++){
if(i === 0){
	items += "In your cart, you have" + ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},`
}
if(i === cart.length - 1){
	items += " and" + ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},`
} else {
items += ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},`
}


}

  return items
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
