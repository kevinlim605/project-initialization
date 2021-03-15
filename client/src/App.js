import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/store';

const store = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>hello</div>
      </Router>
    </Provider>
  );
};

export default App;
