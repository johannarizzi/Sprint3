// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      cartList.push(products[i]);
    }
    console.log(cartList);

    document.getElementById("count_product").textContent = cartList.length;
  }

  document.getElementById("count").textContent =
    "Total product:" + " " + cartList.length;
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;

  document.getElementById("count").textContent =
    "Total:" + " " + cartList.length;
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }

  document.getElementById("totalPrice").textContent =
    "Total price:" + " " + "$" + total;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  for (let product of cartList) {
    let repeat = false;
    for (let productCart of cart) {
      if (productCart.id === product.id) {
        repeat = true;
        productCart.quantity++;
        product.subtotal = product.quantity * product.price;
      }
    }
    if (repeat === false) {
      product.quantity = 1;
      cart.push(product);
      product.subtotal = product.quantity * product.price;
    }
  }
}

// Exercise 5
function applyPromotionsCart(total) {
  // Apply promotions to each item in the array "cart"
  generateCart();
  for (let product of cart) {
    if (product.id === 1 && product.quantity >= 3) {
      let buy1 = product.price * product.quantity;
      let descont1 = buy1 * 0.2;
      product.subtotalWhithDiscount = buy1 - descont1;
      product.subtotal = product.subtotalWhithDiscount;
    } else if (product.id === 3 && product.quantity >= 10) {
      let buy2 = product.price * product.quantity;
      let descont2 = buy2 * 0.3;
      product.subtotalWhithDiscount = buy2 - descont2;
      product.subtotal = product.subtotalWhithDiscount;
    }
  }

  console.log(cart);

  total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].subtotal;
  }

  document.getElementById("totalDescont").textContent =
    "Total descont:" + " " + "$" + total;

  console.log(total);
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {}
