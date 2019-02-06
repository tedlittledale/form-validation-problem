# [Form validation problem](https://thibaudcolas.github.io/form-validation-problem/)

We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend around **2 hours** working on it. The last thing we want you to do is toil away for days on end!

If you find yourself taking longer, please stop where you deem appropriate and let us know how you fared. If you finish early, spend a moment to consider what other related skills you could demonstrate – knowledge of a specific tool or library, software development practice; you decide.

## Problem definition

Included in this repository is an [index.html](index.html) file that contains a form. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements

If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

```html
<p class="error">
    <label for="field"></label>
    <input id="field" type="text" value="foo">
</p>
```

Please write a little bit about the technology you chose and why, including any limitations or possibilities of this approach.

## The cherry on the cake

Beyond the problem statement, show us the consideration you have given to some or all of the following:

- Documentation
- Accessibility
- Progressive enhancement
- Browser support
- Testing
- Tooling

## Submission

Please email us a link to your fork of this repository, or a zip of your solution.
