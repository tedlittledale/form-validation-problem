Form validation
=======================

>[Demo of my solution](https://rawgit.com/ThibWeb/form-validation-problem/master/index.html)

## Tooling

~~~
$ npm install
$ npm start
$ npm test
~~~

## Development Process

I tried to approach this task as real-world client work billed for two hours. You can find each step of the process on the [feature-validation branch](https://github.com/ThibWeb/form-validation-problem/commits/feature-validation), and the final working code is [merged on master](https://rawgit.com/ThibWeb/form-validation-problem/master/index.html).

### 1) Select a form validation library (10min)

I first started by reading the requirements and [selecting a form validation library](https://www.javascripting.com/search?q=valid). Contenders:

- http://jqueryvalidation.org/
- http://parsleyjs.org/
- http://rickharrison.github.io/validate.js
- http://jaymorrow.github.com/validatr

The first two require jQuery, which would be a little overkill to add for such a small project. I selected __validate.js__ because it's API was simple to use and the project seems to be maintained. If jQuery was already in use on the project, I'd have gone with jQuery Validate as it is the _de facto_ standard for form validation (widely known, well maintained, handles i18n and error messages, many validation rules out of the box).

The validate.js API looks very similar to jQuery Validate's, contrary to Parsley ("No API, all HTML") and Validatr (based on HTML5 validation).

### 2) Setup front-end tooling (10min)

On an existing project, this would probably already be done. I chose to go with tools I already knew:

- [npm](http://npmjs.com/) for dependency management & lightweight task runner
- [BrowserSync](http://www.browsersync.io/) for live-reload during development
- [JSHint](http://jshint.com/) for linting / code quality
- [Selenium IDE (+ Firefox)](http://www.seleniumhq.org/projects/ide/) for testing / automation

Again, those are very pragmatic choices: they make the development process easier and are all straightforward to setup and use.

### 3) Record simple test cases (5min)

Selenium IDE is a Firefox plugin which allows to create tests by recording user interaction with a page. You can then save those test cases and replay them as many times as you want. I always use it when working with forms, as it is very easy to make simple tests to automate form submission. It is also very easy to share those test cases between developers, and to transform them into full-fledged functional tests.

I recorded myself interacting with the form in cases where validation would fail or succeed. Those test cases will be replayed at will during development.

### 4) Implement the simple validation rules and error handling (30min)

No surprises here.

### 5) Implement custom rules + add Zepto to ease DOM manipulation (30min)

- The `multiple_checked` rule is a parameterized rule to allow for the "minimum number of animals to choose" requirement to change.
- For Tiger Type, it is straightforward: it is required only if `tiger` is checked.

I chose to add Zepto because it felt like a good compromise between ease of DOM manipulation and library size. Moreover, it can easily be replaced by jQuery (APIs are the same) if need be. In a real-world project, this kind of choice would have probably already been taken (jQuery, Zepto, Angular, etc).

### 6) Add more test cases and fix some bugs (30min)

I added more Selenium test cases to reflect complex interaction scenarios. It proved very useful, because I had forgotten to reset the error state between each validation (remove `.error` class on all fields and add it back if they aren't valid).

I also did cross-browser testing on Chrome 41 & Mobile Safari for iOS 6. Thanks to BrowserSync, this is really easy: it keeps the page in sync on all open browsers, and opens up a port to help you get the page on your mobile devices.

I also discovered some bugs in the HTML/CSS:

- The password field's name was [`username`](https://github.com/springload/form-validation-problem/blob/f0b377821184bdd8bca3d742f9ed17f9d0334266/index.html#L166).
- `span.label` did not turn [red on error](https://github.com/springload/form-validation-problem/blob/f0b377821184bdd8bca3d742f9ed17f9d0334266/index.html#L140)
- Same for the [colour `select`](https://github.com/springload/form-validation-problem/blob/f0b377821184bdd8bca3d742f9ed17f9d0334266/index.html#L144)

### 7) Merge the feature branch with master and push (5min)

Two hours was a good estimate. It could have probably been done faster if development tools (livereload, testing) and libraries (DOM manipulation, form validation) were setup beforehand.

## Going further

If I had more time / if the scope was bigger, here are things that could have been improved.

Regarding functionality:

1. Display error messages when validation fails.
2. Validate fields when they are updated, not only on submit.
3. Share validation rules with the server (_à la_ [revalidator](https://github.com/flatiron/revalidator) for example).
4. Challenge the ["Password must be longer than 8 characters"](https://github.com/springload/form-validation-problem/blame/master/README.md#L11) rule, to replace it by the more common "at least 8 characters".

Regarding tooling:

1. Turn the Selenium IDE tests into real functional tests (for example by adding `assert` statements to check for error classes).
2. Create a build process for the project (code minification + more static analysis + packaging for deployment, for example with [gulp](http://gulpjs.com/)).
3. Setup a CI server which could run the Selenium tests (e.g. [Jenkins](http://jenkins-ci.org/) + [Selenium Server](http://seleniumhq.org/), or [Travis](https://travis-ci.org/) + [SauceLabs](https://saucelabs.com/)).

Since this isn't really a real-world exercice and I am currently unemployed, I:

1. Submitted a small [Pull Request to validate.js](https://github.com/rickharrison/validate.js/pull/127).
2. Tried to help with [issues](https://github.com/rickharrison/validate.js/issues/123).
3. Sent you my application!

## Exercice

We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend around **2 hours** working on it. The last thing we want you to do is toil away for days on end!

If you've stumbled across this and want to work at [springload.co.nz](http://springload.co.nz) feel free to submit it too. We might not have anything available but we're always on the lookout for skilled developers.

## Problem definition
Included in this repository is an [index.html](https://raw.githubusercontent.com/springload/form-validation-problem/master/index.html) file that contains a form. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements
If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.
```html
<p class='error'>
    <label for='field'></label>
    <input id='field' type='text' value='foo'>
</p>
```

## Submission
Please email us a zip or tar.gz of your solution to 1337h4x0r@springload.co.nz.
