import React from 'react';

const FormExample = () => {
  return (
    <form method="post" action="">
      <h1>Fill out this awesome form</h1>
      <fieldset>
        <h3>Your details</h3>
        <p>
          <label className="label" for="email">
            Email
          </label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label className="label" for="password">
            Password
          </label>
          <input
            className="error"
            type="password"
            id="password"
            name="username"
          />
        </p>
      </fieldset>

      <fieldset>
        <h3>Your animal</h3>
        <p>
          <label className="label" for="colour">
            Colour
          </label>
          <select name="colour" id="colour">
            <option value="">Choose colour</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
          </select>
        </p>
        <p>
          <span className="label">Animal</span>

          <input type="checkbox" name="animal" value="bear" id="bear" />
          <label for="bear">Bear</label>

          <input type="checkbox" name="animal" value="tiger" id="tiger" />
          <label for="tiger">Tiger</label>

          <input type="checkbox" name="animal" value="snake" id="snake" />
          <label for="snake">Snake</label>

          <input type="checkbox" name="animal" value="donkey" id="donkey" />
          <label for="donkey">Donkey</label>
        </p>
        <p>
          <label className="label" for="tiger_type">
            Type of tiger
          </label>
          <input type="text" name="tiger_type" id="tiger_type" />
        </p>
      </fieldset>
      <fieldset>
        <p>
          <input type="submit" value="Create account" />
        </p>
      </fieldset>
    </form>
  );
};

export default FormExample;
