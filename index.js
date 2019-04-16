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
  } else if (cart.length === 1){
		return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
	}
var newAr = []
for(let i = 0; i < cart.length; i++){
newAr.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
}
for(let i = 0; i < newAr.length; i++){
	if(i === newAr.length - 1)
	newAr[i] = "and " + newAr[i] + "."
}

return "In your cart, you have " + newAr.join(", ")
}


function total() {
let sum = 0
for(let i = 0; i < cart.length; i++){
  sum += cart[i]["itemPrice"]
}
return sum
}

function removeFromCart(item) {
  function removeFromCart(item) {
    if(!cart.indexOf(item)){
     return "That item is not in your cart."
  	}
  for(let i = 0; i < cart.length; i++){
  	if(cart[i]["itemName"] === item){
  		console.log(cart[i])
  		cart.splice(i,1)

  	}

  }
  return cart
  }

function placeOrder(cardNumber) {
  // write your code here
}
