
export function activePlayer(state = { activePlayer: 0 }, action = {}) {
  console.log('ap called');
  return {
    ...state,
    ...action
  };
}
