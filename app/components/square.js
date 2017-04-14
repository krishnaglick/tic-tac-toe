
import React from 'react';

function Square({ actions: { changeTurn, selectPiece, victoryCheck, dispatch }, rowNumber, cellNumber, type, player, grid }) {
  const { activePlayer, gameState } = player;
  const selectSquare = () => {
    if(type === 0 && gameState === 0) {
      dispatch(selectPiece(rowNumber, cellNumber, activePlayer));
      dispatch(changeTurn(activePlayer));
      dispatch(victoryCheck(grid));
    }
  };
  let style, letter;
  if(type === 0) {
    style = 'square';
    letter = activePlayer > 0 ? 'X' : 'O';
  }
  else if(type === 1) {
    style = 'x';
    letter = 'X';
  }
  else if(type === -1) {
    style = 'o';
    letter = 'O';
  }
  return (
    <div
      className={style}
      onClick={selectSquare}>
        <h1>{letter}</h1>
    </div>
  );
}

export default Square;
