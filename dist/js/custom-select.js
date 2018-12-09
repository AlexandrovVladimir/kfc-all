$(document).ready(function() {
  $('.feedback-casting-form__select_restorants').customSelect({
    // transition: 400,
    // placeholder: '<span style="color: rgb(195, 195, 195); text-align: center;">Название ресторана</span>'
  });

  $('.feedback-casting-form__select_companies').customSelect({
    // transition: 400,
    // placeholder: '<span style="color: rgb(195, 195, 195); text-align: center;">Название компании</span>'
  });

  $(window).on("load",function(){
    $(".custom-select__dropdown").mCustomScrollbar();
  });
});