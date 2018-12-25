var localVideoArray = []; // id local player
var players = [];

$(document).ready(function () {
  /* Local video */

  $('.local-video').each(function () {
    id = $(this).attr('id');
    localVideoArray.push(id);
  });

  var j = 0;
  var currentActiveLocalPlayer = '';
  localVideoArray.forEach(function (elem) {
    var firstvideo = document.getElementById(elem);
    firstvideo.onplaying = function() {
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

  $('.local-video').each(function () {
    id = $(this).attr('id');
    localVideoArray.push(id);
  });

  /* Local video */


  /*response mentor image*/
  if ($('.local-video').length < 4) {
    $('.mentor-image').css('width', '19%');
  }
  /*response mentor image*/

});