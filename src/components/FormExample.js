import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import Input from './inputs/Input';
import MultiOptionCheckbox from './inputs/MultiOptionCheckbox';
import Select from './inputs/Select';

const FormWrapper = styled('form')`
  background: #fff;
  padding: 1em 1.25em;
  border: solid 1px #ccc;
  border-radius: 0.25em;
  label {
    vertical-align: middle;
  }
  legend {
    display: block;
    padding: 10px 10px 10px 0;
  }
  /*
            Note: Don't change font-family on password inputs,
            unless you want tiny •••• bullets :)
        */
  input[type='text'],
  input[type='submit'] {
    font-family: sans-serif;
  }

  input[type='text'],
  input[type='password'],
  input[type='submit'],
  select {
    font-size: 1em;
    border-radius: 0.25em;
    -webkit-appearance: none;
  }

  input[type='text'],
  input[type='password'] {
    border: solid 1px #ddd;
    padding: 0.5em 0.5em;
    color: #555;
    width: 16em;
  }

  input[type='submit'] {
    border: solid 1px transparent;
    background: #0b77db;
    color: #fff;
    font-size: 0.875em;
    padding: 0.75em 1em;
    cursor: pointer;
  }

  input[type='submit']:hover {
    background: #3c9aa7;
  }

  input[type='submit']:focus {
    background: #3d6eac;
  }

  input[type='text']:focus,
  input[type='password']:focus,
  input[type='submit']:focus {
    outline: none;
    border-color: #0b77db;
    box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
  }

  input[type='submit']:active {
    background: #333;
    border-color: #333;
  }

  label + input[type='checkbox'] {
    margin-left: 1em;
  }

  select {
    width: 17em;
  }

  fieldset {
    border: none;
    padding: 0;
    > div {
      padding: 12px 0;
    }
  }

  fieldset + fieldset {
    border-top: solid 1px #eee;
  }

  .label {
    width: 10em;
    display: inline-block;
  }

  .hidden {
    display: none;
  }

  /*
            -------------------------------------------------------------------
            Error states
            -------------------------------------------------------------------

            An error class to forms that fail your validation:

            <p class='error'>
                <label for='field'></label>
                <input id='field' type='text' value='foo'>
            </div>
        */
  input.error,
  div.error,
  label.error {
    p {
      color: red;
    }
  }

  .error input {
    border-color: red;
  }
`;

const FormSchema = yup.object().shape({
  email: yup
    .string()
    .required('You must add an email address')
    .email('This is not a valid email address'),
  password: yup
    .string()
    .required('You must add a password')
    .min(9, 'Must be at greater than 8 characters long'),
  colour: yup.string().required('You must select a colour'),
  animal: yup
    .object()
    .test('has-two-an-mals', 'You must select at least two animals', value => {
      const totalAnimals = Object.values(value).reduce(
        (accumulator, currentValue) =>
          accumulator + (currentValue === false ? 0 : 1),
        0
      );
      return totalAnimals >= 2;
    }),
  tiger_type: yup
    .string()
    .notRequired()
    .when('animal', {
      is: ({ tiger }) => tiger !== false,
      then: yup.string().required('You must specify type of Tiger'),
      otherwise: yup.string().notRequired()
    })
});

const FormExample = () => {
  const { register, handleSubmit, watch, errors, getValues } = useForm({
    validationSchema: FormSchema,
    mode: 'onBlur' //validate each field on blur event
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  const { 'animal.tiger': tiger } = getValues();
  const tigerSelected = !!tiger; //has the tiger checkbox been selected
  console.log({ tigerSelected });
  return (
    <FormWrapper method="post" action="" onSubmit={handleSubmit(onSubmit)}>
      <h1>Fill out this awesome form</h1>
      <fieldset>
        <h3>Your details</h3>
        <div>
          <Input
            label="Email"
            type="text"
            id="email"
            name="email"
            register={register}
            errors={errors}
          />
        </div>
        <div>
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            register={register}
            errors={errors}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Your animal</legend>
        <div>
          <Select
            label="Colour"
            name="colour"
            errors={errors}
            options={[
              {
                label: 'Blue',
                value: 'blue'
              },
              {
                label: 'Green',
                value: 'green'
              },
              {
                label: 'Red',
                value: 'red'
              },
              {
                label: 'Black',
                value: 'black'
              }
            ]}
            register={register}
          />
        </div>
        <div>
          <MultiOptionCheckbox
            name="animal"
            register={register}
            errors={errors}
            options={[
              {
                label: 'Bear',
                optionName: 'bear'
              },
              {
                label: 'Tiger',
                optionName: 'tiger'
              },
              {
                label: 'Snake',
                optionName: 'snake'
              },
              {
                label: 'Donkey',
                optionName: 'donkey'
              }
            ]}
          />
        </div>
        <div className={tigerSelected ? '' : 'hidden'}>
          <Input
            label="Type of tiger"
            type="text"
            name="tiger_type"
            id="tiger_type"
            register={register}
            errors={errors}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input
            type="submit"
            value="Create account"
            ref={register}
            onClick={() => {
              const values = getValues();
              console.log({ values });
            }}
          />
        </div>
      </fieldset>
    </FormWrapper>
  );
};

export default FormExample;
