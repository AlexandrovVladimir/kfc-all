$(document).ready(function () {
  const originalSourceUrl = 'https://m2m128.hostingradio.ru:8074/m2m128.mp3';
  const song = $('audio')[0];
  let volumeSlider;

  $('.icon-default').on('click', function() {
    play(this);
  });
  function play(that) {
    if ($(that).hasClass('icon-play')) {
      //pause
      $(that).addClass('icon-pause');
      $(that).removeClass('icon-play');

      if (!song.getAttribute('src')) {
        song.setAttribute('src', originalSourceUrl);
        song.load(); // This restarts the stream download
      }
      song.play();
      //gif
      $(that).parent().prev().find('img').attr('src', 'img/eq.gif');
      $('.player__volume').css('opacity', '1');
      $('.player__eq').css('opacity', '1');
    } else {
      //play
      $(that).removeClass('icon-pause');
      $(that).addClass('icon-play');

      song.pause();
      // settimeout, otherwise pause event is not raised normally
      setTimeout(function () {
        song.load(); // This stops the stream from downloading
      });
      //img
      $(that).parent().prev().find('img').attr('src', 'img/ekv.png');
      $('.player__volume').css('opacity', '0');
      $('.player__eq').css('opacity', '0');
    }
  }
  function setVolume(song) {
    song.volume = volumeSlider / 100;
  }
  $(".volumeslider").slider({
    range: "max",
    animate: true,
    value: 100,
    min: 0,
    max: 100,
    step: 1,
    slide: function( event, ui ) {
      volumeSlider = ui.value;
      setVolume(song);
    }
  });

});