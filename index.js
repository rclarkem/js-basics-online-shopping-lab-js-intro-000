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
return cart
}

function viewCart() {
let final
let items = " ";
	if(cart.length < 1){
    return "Your shopping cart is empty."
  }
	var newAr = []

for(let i = 0; i < cart.length; i++){
newAr.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
// console.log(newAr[newAr.length - 1])
// console.log(items += newAr[0])
}
for(let i = 0; i < newAr.length; i++){
	if(i === newAr.length - 1)
	newAr[i] = "and " + newAr[i] + "."
}

return "In you cart, you have " + newAr.join(", ")
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
