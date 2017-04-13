
import _ from 'lodash';

const importedActions = [
  'actionsReplace'
];

const actions = {};
_.forEach(importedActions, (action) => {
  _.forEach(Object.keys(action), (key) => {
    actions[key] = (...args) => {
      const actionValue = action[key](...args, actions);
      if(typeof actionValue === 'function')
        return actionValue;
      const type = actionValue.type || key;
      delete actionValue.type;
      return {
        type,
        ...actionValue
      };
    };
  });
});

module.exports = actions;