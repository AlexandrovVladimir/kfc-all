$(document).ready(function () {

  // $(".footer-logo").on('click', function (e){
  //   e.preventDefault();
  //   $('html, body').animate({
  //     scrollTop: $("html,body").offset().top
  //   }, 1500);
  // });

  $('.faq-list__item').on('click', function() {
    $(this).find('.faq-list-wrapper').toggleClass('active');
    $(this).find('.faq-list-wrapper').next().toggle(300);
  });

  $("#talent").on("click", ".talent-send", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    let id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });




  /*mentors*/
  /*mentors slider*/
  $('.mentors-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // prevArrow: '<span class="slick-prev"><img src="../img/arrow-point-to-right.svg" alt="arrow"></span>',
    // nextArrow: '<span class="slick-next"><img src="../img/arrow-point-to-right.svg" alt="arrow"></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          // dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          // dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      }
    ]
  });

  // $('.mentors-list__image').on('click', function() {
  //   $('.mentors-data__name').html($(this).next().html());
  //   $('.mentors-data__description').html($(this).next().next().html());
  // });

  /*/mentors slider*/

  /*mentors animation*/
  $('.mentors').on('click', '.mentors-list__image img', function() {
    let that = $(this);
    let newimg = '';
    $('.mentors-data__left').html('');
    $.fancybox.open({
      animationDuration: 1200,
      transitionDuration: 1200,
      transitionEffect: 'zoom-in-out',
      src  : $(this).attr('data-src'),
      opts : {
        afterLoad : function( instance, current ) {
          setTimeout(function() {
            $('.mentors-data-wrapper').css('opacity', 1);
          }, 1);
          newimg = that.clone();
          newimg = newimg.removeAttr('data-src');
          $('.mentors-data__left').append(newimg);
        },
        afterClose : function() {
          $('.mentors-data-wrapper').css('opacity', 0);
          $('.mentors-data__left').html('');
        }
      }
    });
  });
  /*/mentors animation*/


});