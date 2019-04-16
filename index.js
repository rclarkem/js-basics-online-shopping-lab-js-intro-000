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
  if(cart.length < 1){
    return "Your shopping cart is empty."
  }
	var newAr = []

for(let i = 0; i < cart.length; i++){
newAr.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
}
for(let i = 0; i < newAr.length; i++){
	if(i === newAr.length - 1)
	newAr[newAr.length - 1] = "and " + newAr[newAr.length - 1] + "."
}

return "In you cart, you have " + newAr
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
