
const initState = {
  activePlayer: 1,
  player1WinCount: 0,
  player2WinCount: 0,
  victor: 0,
  gameState: 0
};

exports.activePlayer = (state, action) => {
  return {
    ...state,
    activePlayer: action.activePlayer
  };
};

exports.playAgain = (state) => {
  state.victor = 0;
  state.gameState = 0;
  state.activePlayer = 1;
  return state;
};

exports.victoryCheck = (state, { victory, draw }) => {
  if(victory === 1) {
    state.player1WinCount += 1;
    state.victor = 1;
    state.gameState = 1;
  }
  else if(victory === -1) {
    state.player2WinCount += 1;
    state.victor = -1;
  }
  if(victory !== 0 || draw) {
    state.gameState = 1;
  }

  return state;
};

export default function(state = initState, action = {}) {
  return exports[action.type] ?
    exports[action.type](state, action) :
    state;
}
