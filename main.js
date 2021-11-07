window.onload = function () {
  const count_btn_els = document.querySelectorAll('.quantity .count');

  for (let i = 0; i < count_btn_els.length; i++) {
    let btn = count_btn_els[i];

    btn.addEventListener('click', function () {
      document.querySelector('.quantity .count.selected').classList.remove('selected');
      this.classList.add('selected');
    });
  }
}

function itemAdded() {
  alert('Item added to cart!');
}

// this is the start of the cart functionality

/* let carts = document.querySelectorAll('.add-cart');

for (let i = 0; i <= carts.length; i++) {
  console.log(carts.length);
  carts[i].addEventListener('click', function () {
    console.log('here');
  })
} */

//every time you click the button, number goes up

//set cart quantity to 0 by default
let cartQty = 0;
console.log('here ' + cartQty);

//every time you click, add one to cart
function cartAddOne() {
  cartQty += 1;
  localStorage.setItem('cartNumber', cartQty);
  document.getElementById('clicks').innerHTML = " (" + cartQty + ")";
}

// cart page display
// when var cartQty is zero, show "your cart is empty"


// need to save customizations from product-details page to server
//after customizations are selected, save the

// need to transfer saved customizations from server to Cart

// need to delete items in cart
