var k = []; // id local player
var players = [];


$(document).ready(function () {


  const originalSourceUrl = 'https://m2m128.hostingradio.ru:8074/m2m128.mp3';
  const song = $('audio')[0];
  var audioPlayer = $('audio');
  let volumeSlider;



  /** music stop */

  var newCurrent = '';
  var currentActivePlayer = '';
  var i = 0;


  function onPlayerStateChange(event) {

    if (event.data == 1){

      k.forEach(function (elem) {
        firstvideo = document.getElementById(elem);
        firstvideo.pause();
      });

      // if(!music.paused){
      //     music.pause();
      //     $('.header__radio-button').closest('.header__wrap').toggleClass('active');
      // }

      if (currentActivePlayer != event.target && i <= 0) {
        currentActivePlayer = event.target;
        i++;
      } else {
        if (currentActivePlayer != event.target) {
          currentActivePlayer.pauseVideo();
          currentActivePlayer = event.target;
          // currentActivePlayer.playVideo();
        }
      }

    }

  }

  /* Local video */

  $('.local__video').each(function () {
    id = $(this).attr('id');
    k.push(id);
  });

  var j = 0;
  var currentActiveLocalPlayer = '';
  k.forEach(function (elem) {

    var firstvideo = document.getElementById(elem);
    firstvideo.onplaying = function () {


      // if(!music.paused){
      //     music.pause();
      //     $('.header__radio-button').closest('.header__wrap').toggleClass('active');
      // }


      $.each(players, function (i, val) {
        this.pauseVideo();
      });



      if (currentActiveLocalPlayer != firstvideo && j <= 0) {
        currentActiveLocalPlayer = firstvideo;
        j++;
      } else {

        if (currentActiveLocalPlayer != firstvideo) {
          currentActiveLocalPlayer.pause();
          currentActiveLocalPlayer = firstvideo;
        }

      }

    }
  });


  /* Local video */

  $('.local__video').each(function () {
    id = $(this).attr('id');
    k.push(id);
  });



  /* Youtube player */

  var players = [];

  $("section").on("click", ".js-videoIframe", function(){
    var $playerBlock = $(this);

    players.push(new YT.Player($playerBlock.attr('id'), {

      videoId: $playerBlock.data('video-id'),
      playerVars: {
        autoplay: 1,
        rel: 0
      },
      events: {
        onStateChange: onPlayerStateChange
      }

    }));
  });










});