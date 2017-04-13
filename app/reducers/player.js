
const initState = { activePlayer: 0 };

export default function(state = initState, action = {}) {
  switch(action.type) {
  case 'activePlayer':
    return {
      activePlayer: action.activePlayer
    };
  default:
    return state;
  }
}

