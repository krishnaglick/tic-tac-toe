
export function changeTurn(activePlayer) {
  activePlayer = activePlayer === 0 ? 1 : 0;
  return {
    activePlayer
  };
}
