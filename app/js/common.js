$(document).ready(function () {
  $('.instagram-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<span class="slick-next"><img src="../img/arrow_right.png" alt="left"></span>',
    prevArrow: '<span class="slick-prev"><img src="../img/arrow_left.png" alt="right"></span>'
  });

  $('.translation-third').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1000,
    // pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.footer-logo__link').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("html,body").offset().top
    }, 750);
  })
});