
import React from 'react';

function Scoreboard({ state, actions: { playAgain, dispatch } }) {
  const { player1WinCount, player2WinCount, gameState, victor, draws } = state.player;
  return (
    <div>
      <div className='scoreboard'>
        <h2>
          Scoreboard
        </h2>
        <h3 className='column'>
          Player One: {player1WinCount}
        </h3>
        <h3 className='column'>
          Player Two: {player2WinCount}
        </h3>
        <h3 className='column'>
          Draws: {draws}
        </h3>
        <h2 className='victor' style={{display: gameState ? 'initial' : 'none'}}>
        {
          victor === 0 ?
          'It was a draw!' :
          `Winner Player ${victor > 0 ? 1 : 2}!`
        }
        </h2>
        <div className='victor' style={{display: gameState ? 'initial' : 'none'}}>
          <span>Play Again?</span>
          <div>
            <button type='button' onClick={() => dispatch(playAgain())}>Yes</button>
            <button type='button' onClick={() => document.write('<div onclick="window.location = window.location.href">Why would you do that?!</div>')}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
