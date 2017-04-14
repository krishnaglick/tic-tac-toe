
import _ from 'lodash';

export function selectPiece(rowNumber, cellNumber, player) {
  return {
    type: 'selectPiece',
    rowNumber,
    cellNumber,
    player
  };
}

export function victoryCheck(grid) {
  const rowSums = {};
  const drawCheck = {};
  _.forEach(grid, (row, i) => {
    _.forEach(row, ({ type }, n) => {
      if((i + 1) / (n + 1) === 1)
        rowSums[1] = (rowSums[1] || 0) + type;
      if(i+n === 2)
        rowSums[-1] = (rowSums[-1] || 0) + type;
      rowSums[`x${i}`] = (rowSums[`x${i}`] || 0) + type;
      rowSums[`y${n}`] = (rowSums[`y${n}`] || 0) + type;
      drawCheck[`${i},${n}`] = type !== 0;
    });
  });
  let victory = 0;
  _.forEach(Object.keys(rowSums), (key) => {
    if(rowSums[key] === 3)
      victory = 1;
    else if(rowSums[key] === -3)
      victory = -1;
  });
  const draw = _.reduce(drawCheck, (a,b) => a && b);
  return {
    type: 'victoryCheck',
    victory,
    draw
  };
}
