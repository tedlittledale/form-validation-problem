(function (FormValidator) {
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
      display: 'required',
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
    if (errors.length > 0) {
      console.table(errors);
      event.preventDefault();
      errors.forEach(displayError);
    }
  });

  function displayError(error) {
    var parent = error.element.parentNode;
    // TODO: Handle case where error is triggered multiple times on the same element.
    parent.className = parent.className + ' error';
  }

  validator.registerCallback('multiple_checked', function(value, nbToCheck, validator) {
    var nbChecked = 0;
    // TODO: Reduce.
    for (var i = 0, len = validator.element.length; i < len; i++) {
      nbChecked += validator.element[i].checked ? 1 : 0;
    }
    return nbChecked >= nbToCheck;
  });

  validator.registerConditional('tiger_chosen', function(field) {
    var tiger = document.getElementById('tiger');
    return tiger.checked;
  });

}(window.FormValidator));
