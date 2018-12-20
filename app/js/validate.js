let $ = jQuery.noConflict(),
    count_field_req = $('#count_field').data('count');

/*change form*/
function changeForm(form, button){
  $(form).find('input').on('change', function(e){
    if (checkedForm(form) === count_field_req){
      jQuery(button).removeClass('feedback-casting-form__button_disable');
      $('.feedback-casting-form__download_input').attr('disabled', false);
    } else {
      jQuery(button).addClass('feedback-casting-form__button_disable');
      $('.feedback-casting-form__download_input').attr('disabled', true);
    }
  });
}

function checkedForm(form) {
  let count = 0;

  $(form).find('input').each(function(){
    if($(this).attr('id') !== 'req10'){
      if($(this).val().length > 2){
        count++;
      }
    }
  });

  // if (document.getElementById('req4').value !== 'Название ресторана'){
  //   count++;
  //   // console.log(count);
  // }

  if (document.getElementById('req5').value !== 'Название компании'){
    count++;
    // console.log(count);
  }

  if (document.getElementById('req8').checked === true){
    count++;
    // console.log(count);
  }

  if (document.getElementById('req9').checked === true){
    count++;
    // console.log(count);
  }

  // console.log(count);

  return count;
}
changeForm('.feedback-casting-form', '.feedback-casting-form__button');

/*check phone mask*/
function checkPhoneMask(input){
  let inputCountry = jQuery('.feedback-casting-form__input_telephone').attr('data-country');

  if (inputCountry === 'Россия' || inputCountry === 'Казахстан'){
    jQuery(input).mask('+0 000 000-00-00');
  } else if (inputCountry === 'Киргизия'){
    jQuery(input).mask('+000 000 00-00-00');
  } else if (inputCountry === 'Белоруссия'){
    jQuery(input).mask('+000 (00) 000-00-00');
  }else {
    jQuery(input).mask('+0 000 000-00-00');
  }
}
// checkPhoneMask('.feedback-casting-form__input_telephone');
// Restricts input for each element in the set of matched elements to the given inputFilter.
$.fn.inputFilter = function(inputFilter) {
  return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
    if (inputFilter(this.value)) {
      this.oldValue = this.value;
      this.oldSelectionStart = this.selectionStart;
      this.oldSelectionEnd = this.selectionEnd;
    } else if (this.hasOwnProperty("oldValue")) {
      this.value = this.oldValue;
      this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
    }
  });
};
$(".feedback-casting-form__input_telephone").inputFilter(function(value) {
  return /^-?\d*$/.test(value);
});

$('#req10').on('change', function(e){
  e.preventDefault();
  if ( $(this).val() !== '' ) {
    upload($(this).prop('files'));
  }
});



$('#personal_rules').click(function(e) {
  e.preventDefault();
  $('#req8').prop('checked', true);
  if (checkedForm('.feedback-casting-form') === count_field_req){
    jQuery('.feedback-casting-form__button').removeClass('feedback-casting-form__button_disable');
    $('.feedback-casting-form__download_input').attr('disabled', false);
  } else {
    jQuery('.feedback-casting-form__button').addClass('feedback-casting-form__button_disable');
    $('.feedback-casting-form__download_input').attr('disabled', true);
  }
});


$('#casting_conditions').click(function(e){
  e.preventDefault();
  $('#req9').prop('checked', true);
  if (checkedForm('.feedback-casting-form') === count_field_req){
    jQuery('.feedback-casting-form__button').removeClass('feedback-casting-form__button_disable');
    $('.feedback-casting-form__download_input').attr('disabled', false);
  } else {
    jQuery('.feedback-casting-form__button').addClass('feedback-casting-form__button_disable');
    $('.feedback-casting-form__download_input').attr('disabled', true);
  }
});


$('#feedback-casting-form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: ajax_var.url,
    dataType: 'json',
    data: $('#feedback-casting-form').serialize(),
    beforeSend: function() {
      // $('.feedback-casting-form-progress__digit').html('0%');
      // $('.feedback-casting-form-progress__line').show();
    }
  })
      .done(function( data ) {
        console.log(data);

        if (data.success) {
          $('.feedback-casting-form-progress').hide();
          $('.feedback-casting-form-progress__line').hide();
          $('.feedback-casting-form-success').show();
          $('#feedback-casting-form').trigger("reset")
        } else {
          console.log('error submit form');
          // alert(data.data.message);
          $('.feedback-casting-form-success .feedback-casting-form__text').html('<p>'+data.data.message+'</p>');
          $('.feedback-casting-form-progress').hide();
          $('.feedback-casting-form-success').show();
        }
      });
});





// Функция загрузки файлов
function upload(files) {
  // Создаем объект FormData
  let formData = new FormData();
  formData.append('file', files[0]);
  formData.append('action' , 'upload_files');

  function setProgress(e) {
    if (e.lengthComputable) {
      let complete = e.loaded / e.total;
      $('.feedback-casting-form-progress__digit').html(Math.floor(complete*100)+ '%');
      $('.feedback-casting-form-progress__line').css('width', Math.floor(complete*100)+ '%');
    }
  }

  // Ajax-запрос на сервер
  $.ajax({
    xhr: function() {
      let xhr = new window.XMLHttpRequest();
      xhr.upload.addEventListener("progress", setProgress, false);
      xhr.addEventListener("progress", setProgress, false);
      return xhr;
    },
    type: 'POST',
    url: ajax_var.url, // URL на метод действия Upload контроллера HomeController
    data: formData,
    dataType: 'json',
    cache: false,
    processData: false,
    contentType: false,
    beforeSend: function () {
      $('.feedback-casting-form-progress__digit').html('0%');
      $('.feedback-casting-form-progress__line').show();
      $('.feedback-casting-form-success-row').show();
      $('.feedback-casting-form-success-form').hide();
      $('.feedback-casting-form-success').hide();
      $('.feedback-casting-form-progress').show();
    },
    success: function (data) {
      console.log(data);
      if (data.success) {
        $('#video_link').val(data.data.link);
        $('#feedback-casting-form').submit();
        $('.feedback-casting-form-progress__digit').html('100%');
        $('.feedback-casting-form-progress__line').css('width', '100%');
      }
      else {
        $('.feedback-casting-form-success .feedback-casting-form__text').html('<p>'+data.data.message+'</p>');
        $('.feedback-casting-form-progress').hide();
        $('.feedback-casting-form-success').show();
      }
    }
  });
}