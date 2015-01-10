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
      // TODO: Add custom rule for "at least two values".
      rules: 'required'
    },
    {
      name: 'tiger_type',
      // TODO: Add custom rule for "if tiger" case.
      rules: ''
    }
  ];

  var validator = new FormValidator('awesome_form', rules, function(errors) {
    if (errors.length > 0) {
      console.table(errors);
    }
  });

}(window.FormValidator));
