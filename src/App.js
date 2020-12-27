import React from 'react';
import {Store} from './redux/Store';
import {Provider} from 'react-redux';
import LoginConnect from './views/login/LoginConnect';

const App = () => {
  return (
    <Provider store={Store} >
      <LoginConnect/>
    </Provider>
  )

}

export default App;
