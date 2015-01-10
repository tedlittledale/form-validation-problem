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
      rules: 'required'
    },
    {
      name: 'tiger_type',
      // TODO: Add custom rule for "if tiger" case.
      rules: ''
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

}(window.FormValidator));
