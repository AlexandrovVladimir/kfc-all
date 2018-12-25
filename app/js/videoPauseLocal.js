$(document).ready(function() {
  $('body').on("click", ".video-list__item", function() {

    // $('video').trigger('pause');
    // $(this).find('video').trigger('play');
    $('.embed-responsive-item').attr('id', '');
    var videoCurrent = $(this).closest('.video-list').find('.embed-responsive-item');
    var videoPlayers = Clappr.UIContainerPlugin.extend({
      name: 'video-players',
      initialize: function() {
        this.render();
      },
      bindEvents: function() {
        this.listenTo(this.container, Clappr.Events.CONTAINER_PAUSE, this.show);
        this.listenTo(this.container, Clappr.Events.CONTAINER_PLAY, this.hide);
      },
      hide: function() {
        this.$el.hide();
      },
      show: function() {
        this.$el.show();
      },
      render: function() {
        this.$el.html('Hello World!');
        this.$el.css('font-size', '100px');
        this.$el.css('color', 'white');
        this.$el.css('background-color', 'red');
        this.$el.css('position', 'relative');
        this.container.$el.append(this.$el);
        this.hide();
        return this;
      }
    });
  });

  var player = new Clappr.Player({
    source: 'video/dog.mp4',
    parentId: "#video",
    // plugins: [videoPlayers],
    width: 318.31,
    height: 179.05,
    events: {

      onEnded: function () {
        console.log(1);
        player.destroy();
      }
    }
  });

  // $('.icon-default').on('click', function () {
  //   if ($(this).hasClass('icon-play')) {
  //     $(this).removeClass('icon-play');
  //     $(this).addClass('icon-pause');
  //
  //     $('.embed-responsive-item').attr('id', '');
  //     let videoCurrent = $(this).closest('.video-list__item').find('.embed-responsive-item');
  //
  //   } else {
  //     $(this).addClass('icon-play');
  //     $(this).removeClass('icon-pause');
  //   }
  // });
});