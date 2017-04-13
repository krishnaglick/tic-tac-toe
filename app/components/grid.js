
import React from 'react';
import _ from 'lodash';

import Square from './square';

function Grid({ state: { grid, player: { activePlayer } }, actions }) {
  console.log(grid);
  const gridKeys = Object.keys(grid);
  const jsxGrid = _.map(gridKeys, (gridKey) => {
    const [x,y] = gridKey.split(',');
    const { type } = grid[gridKey];
    return (
      <Square
        key={gridKey}
        actions={actions}
        rowNumber={~~x}
        cellNumber={~~y}
        activePlayer={activePlayer}
        type={type}
      />
    );
  });
  return (<div className='grid'>{jsxGrid}</div>);
}

export default Grid;
