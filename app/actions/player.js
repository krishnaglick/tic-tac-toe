
export function changeTurn(activePlayer) {
  return {
    type: 'activePlayer',
    activePlayer: activePlayer ? 0 : 1
  };
}
