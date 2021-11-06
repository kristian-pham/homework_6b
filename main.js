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
