
import _ from 'lodash';
import { combineReducers } from 'redux';

const reducers = {
  grid: require('./grid.js'),
  player: require('./player.js')
};

const reducerContainers = {};
_.forEach(Object.keys(reducers), key => {
  let initialState = {};
  _.forEach(Object.keys(reducers[key]), (reducerKey) => {
    initialState = {
      ...initialState,
      ...reducers[key][reducerKey]()
    };
  });
  reducerContainers[key] = (state = initialState, action = {}) => {
    const type = action.type;
    delete action.type;
    return reducers[key][type] ?
      reducers[key][type](state, action) :
      state;
  };
});


const reducer = combineReducers({
  ...reducerContainers
});

export default reducer;