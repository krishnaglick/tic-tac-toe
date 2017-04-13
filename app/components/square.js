
import React from 'react';

function Square({ actions: { changeTurn, selectPiece, dispatch }, rowNumber, cellNumber, type, value, activePlayer }) {
  const selectSquare = () => {
    if(type === 0) {
      dispatch(selectPiece(rowNumber, cellNumber, activePlayer));
      console.log(activePlayer);
      dispatch(changeTurn(activePlayer));
    }
  };
  let style;
  if(type === 0)
    style = 'square';
  else if(type === 1)
    style = 'x';
  else if(type === 2)
    style = 'o';
  return (
    <div
      className={style}
      onClick={selectSquare}>
        <h1>{(value || activePlayer) ? 'O' : 'X'}</h1>
    </div>
  );
}

export default Square;
