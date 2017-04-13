
export function changeTurn(state = { activePlayer: 0 }, action = {}) {
  return {
    ...state,
    ...action
  };
}
