
import _ from 'lodash';

const importedActions = [
  require('./grid.js'),
  require('./player.js')
];

const actions = {};
_.forEach(importedActions, (action) => {
  _.forEach(Object.keys(action), (key) => {
    actions[key] = (...args) => {
      const actionValue = action[key](...args, actions);
      if(typeof actionValue === 'function')
        return actionValue;
      delete actionValue.type;
      return {
        type: key,
        ...actionValue
      };
    };
  });
});

module.exports = actions;