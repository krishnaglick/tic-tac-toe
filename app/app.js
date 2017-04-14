
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import actions from './actions';

import store from './store';
import Grid from './components/grid';
import Scoreboard from './components/scoreboard';

class App extends Component {
  render() {
    const state = store.getState();
    actions.dispatch = store.dispatch;
    return (
      <Provider store={store}>
        <div className='ticTacToe'>
          <Grid {...{ state, actions }} />
          <Scoreboard {...{ state, actions }} />
        </div>
      </Provider>
    );
  }
}

const renderApp = () => render(<App />, document.getElementById('app'));

renderApp();
//This tripped me up for too long. react/router/redux does this for you.
store.subscribe(renderApp);
