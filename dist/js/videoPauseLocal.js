$(document).ready(function() {
  $('body').on("click", ".video-list__item", function() {

    $('video').trigger('pause');
    $(this).find('video').trigger('play');

  });
});