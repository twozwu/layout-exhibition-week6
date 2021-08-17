  //  <!-- Initialize Swiper -->
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 25,
  centeredSlides: false,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(function() {
  console.log('Hello Bootstrap5');
});

