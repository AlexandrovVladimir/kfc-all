$(document).ready(function () {
  /*mentors*/
  $('.mentors-list__image').on('click', function() {
    $('.mentors-data__name').html($(this).next().html());
    $('.mentors-data__description').html($(this).next().next().html());
  });
});