import React from 'react';
import ReactDOM from 'react-dom';

import FormExample from './components/FormExample';

const App = () => (
  <div className="App">
    <FormExample></FormExample>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
