$(document).ready(function () {

  /* Youtube player */

  let players = [];

  $(".video-item").on("click", ".js-videoIframe", function() {
    let $playerBlock = $(this);

    players.push(new YT.Player($playerBlock.attr('id'), {

      videoId: $playerBlock.data('video-id'),
      playerVars: {
        autoplay: 1,
        rel: 0
      }
    }));
  });
});