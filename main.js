(function ($, FormValidator) {
  'use strict';

  var rules = [
    {
      name: 'email',
      rules: 'required|valid_email'
    },
    {
      name: 'password',
      rules: 'required|min_length[9]'
    },
    {
      name: 'colour',
      rules: 'required'
    },
    {
      name: 'animal',
      rules: 'required|callback_multiple_checked[2]'
    },
    {
      name: 'tiger_type',
      rules: 'required',
      depends: 'tiger_chosen'
    }
  ];

  var validator = new FormValidator('awesome_form', rules, function(errors, event) {
    // Reset errors on each validation.
    $('.error').removeClass('error');

    if (errors.length > 0) {
      console.table(errors);
      event.preventDefault();

      errors.forEach(function displayError(error) {
        $('[name=' + error.name + ']').parent().addClass('error');
      });
    }
  });

  validator.registerCallback('multiple_checked', function(_, nbToCheck, validator) {
    var nbChecked = $('[name=' + validator.name + ']').reduce(function (acc, elt) {
      acc += $(elt).is(':checked') ? 1 : 0;
      return acc;
    }, 0);

    return nbChecked >= nbToCheck;
  });

  validator.registerConditional('tiger_chosen', function() {
    return $('#tiger').is(':checked');
  });

}(window.Zepto, window.FormValidator));
