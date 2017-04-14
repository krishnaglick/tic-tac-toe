
export function changeTurn(activePlayer) {
  return {
    type: 'activePlayer',
    activePlayer: activePlayer > 0 ? -1 : 1
  };
}

export function playAgain() {
  return {
    type: 'playAgain'
  };
}
