
export function selectPiece(rowNumber, cellNumber, player) {
  return {
    type: 'selectPiece',
    rowNumber,
    cellNumber,
    player
  };
}
