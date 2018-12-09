/*change form*/
function changeForm(form, button){
  $(form).find('input').on('change', function(e){
    if (checkedForm(form) === 9){
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

  if (document.getElementById('req4').value !== 'Название ресторана'){
    count++;
    // console.log(count);
  }

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
checkPhoneMask('.feedback-casting-form__input_telephone');
function formSender(form, button){
  $(form).ajaxForm({
    beforeSend: function() {
      $('.feedback-casting-form-progress__digit').html('0%');
      $('.feedback-casting-form-progress__line').show();

      // $(form).hide();

      // console.log(percentVal);
    },

    uploadProgress: function(event, position, total, percentComplete) {
      $('.feedback-casting-form-success-row').show();
      $('.feedback-casting-form-success-form').hide();
      $('.feedback-casting-form-progress').show();
      $('.feedback-casting-form-progress__digit').html(percentComplete + '%');
      $('.feedback-casting-form-progress__line').css('width', percentComplete + '%');
    },

    complete: function(xhr) {
      $('.feedback-casting-form-success').show();
      $('.feedback-casting-form-progress').hide();

      console.log(xhr.responseText);
    }
  });

  $('#req10').on('change', function(e){
    e.preventDefault();

    $(form).submit();
  });
}

formSender('.feedback-casting-form', '.feedback-casting-form__button');
