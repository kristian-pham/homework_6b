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

//set cart quantity to 0 by default
let cartQty = 0;

//used every time product-detail "add to cart" is clicked
function cartCounter() {
  cartQty += 1;
  localStorage.setItem('cartNumber', cartQty);
  updateCartNav()
}

//every time you click, add one to cart
//should be updating the navbar cart qty, on load of each screen
function updateCartNav() {
  document.getElementById('clicks').innerHTML = " (" + localStorage.getItem('cartNumber') + ")";
}

// need to transfer saved customizations from server to Cart

// need to delete items in cart
function removeItem() {
  cartQty - 1;
  localStorage.setItem('cartNumber', cartQty);
  updateCartNav();
}

// cart page display
// when var cartQty is zero, show "your cart is empty"

function emptyCart (){
  if (parseInt(localStorage.getItem('cartNumber')) > 1) {
    console.log(parseInt(localStorage.getItem('cartNumber')));
    console.log('if');
    document.getElementById('noItems').style.display = "none";
    document.getElementById('noItems').innerHTML = "";
  } else {
    console.log(parseInt(localStorage.getItem('cartNumber')));
    console.log('else');
    //document.getElementById("itemInCart").style.display = "none";
    document.getElementById('itemInCart').innerHTML = "hi";
  }
}
