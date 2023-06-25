$(function () {
  $(".review-slider__inner").slick({
    dots: true,
    autoplay: true,
    // fade: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/icons/left-arrow.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/icons/right-arrow.svg" alt=""></button>',
  });
});
