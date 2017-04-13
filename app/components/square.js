
import React from 'react';

function Square({ actions: { changeTurn, selectPiece, dispatch }, rowNumber, cellNumber, type, activePlayer }) {
  const selectSquare = () => {
    if(type === 0) {
      dispatch(selectPiece(rowNumber, cellNumber, activePlayer));
      dispatch(changeTurn(activePlayer));
    }
  };
  let style, letter;
  if(type === 0) {
    style = 'square';
    letter = activePlayer ? 'O' : 'X';
  }
  else if(type === 1) {
    style = 'x';
    letter = 'X';
  }
  else if(type === 2) {
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
