
export function selectPiece(rowNumber, cellNumber, player, { dispatch, changeTurn }) {
  return { rowNumber, cellNumber, player };
}
