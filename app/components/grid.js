
import React from 'react';
import _ from 'lodash';

import Square from './square';

function Grid({ state: { grid, player }, actions }) {
  const jsxGrid = [];
  _.forEach(grid, (row, x) => {
    _.forEach(row, (cell, y) => {
      const { type } = cell;
      jsxGrid.push(
        <Square
          key={`${x},${y}`}
          actions={actions}
          grid={grid}
          rowNumber={x}
          cellNumber={y}
          player={player}
          type={type}
        />
      );
    });
  });
  return (<div className='grid'>{jsxGrid}</div>);
}

export default Grid;
