import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  getByText
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FormExample from './FormExample';

describe('<Form.Container />', () => {
  test('it should show 4 error messages if submited with no data', async () => {
    const { container, debug } = render(<FormExample />);

    await fireEvent.click(
      container.querySelectorAll("input[type='submit']")[0]
    );
    await expect(
      waitForElement(() => [getByText('You must add an email address')], {
        timeout: 50
      })
    ).rejects.toThrow();
    expect(container.querySelectorAll('div.error').length).toBe(4);
  });
  test('it should show error if incorrect email format is used', async () => {
    const { container, debug, getByText } = render(<FormExample />);

    fireEvent.change(container.querySelector("input[name='email']"), {
      target: { value: 'test' }
    });

    await fireEvent.click(
      container.querySelectorAll("input[type='submit']")[0]
    );
    await expect(
      waitForElement(() => [getByText('This is not a valid email address')], {
        timeout: 50
      })
    ).rejects.toThrow();
    expect(getByText('This is not a valid email address')).not.toBeNull();
  });
  //TODO
  test('it should show error if Password is not longer than 8 characters', async () => {});
  test('it should show error if Colour is not selected.', async () => {});
  test('it should show error if If Tiger is one of the chosen Animals but Type of tiger has no value', async () => {});
});
