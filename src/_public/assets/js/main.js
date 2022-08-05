/*eslint linebreak-style: ["error", "windows"]*/

/* ---------------------------------- SLICK SLIDE --------------------------------- */
let currentSlide = 0;
let items = document.querySelectorAll(".p-design__img > img");

function renderSlide() {
  for (let i = 0; i < items.length; i++) {
    if (i === currentSlide) {
      items[i].classList.add("is-active");
    }
  }
}

function clearSlide() {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("is-active");
  }
}

function nextSlide() {
  currentSlide = currentSlide >= items.length - 1 ? 0 : currentSlide + 1;
  clearSlide();
  renderSlide();
}

function prevSlide() {
  currentSlide = currentSlide <= 0 ? items.length - 1 : currentSlide - 1;
  clearSlide();
  renderSlide();
}

document.querySelector("#next").addEventListener("click", nextSlide);
document.querySelector("#prev").addEventListener("click", prevSlide);
