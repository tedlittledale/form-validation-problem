import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      body {
        font-family: sans-serif;
        line-height: 1.5;
        color: #333;
        background: #ddd;
        margin: 2em;
      }

      h1,
      h3 {
        color: #576774;
      }

      h1:first-child {
        margin-top: 0;
      }
`;

import FormExample from './components/FormExample';

const App = () => (
  <>
    <GlobalStyle />
    <div className="App">
      <FormExample></FormExample>
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
