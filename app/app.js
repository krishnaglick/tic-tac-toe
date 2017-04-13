
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import actions from './actions';

import store from './store';
import Grid from './components/grid';

class App extends Component {
  render() {
    const state = store.getState();
    actions.dispatch = store.dispatch;
    console.log('App State: ', state);
    return (
      <Provider store={store}>
        <Grid {...{ state, actions }} />
      </Provider>
    );
  }
}

const renderApp = () => render(<App />, document.getElementById('app'));

renderApp();
//This tripped me up for too long. react/router/redux does this for you.
store.subscribe(renderApp);

if(`${process.env.MODE}`.toLowerCase() === 'dev') {
  try {
    require('./templates/actionTemplate');
    require('./templates/reducerTemplate');
    require('./actions/index');
    require('./reducers/index');
  }
  catch(x) {}
}
