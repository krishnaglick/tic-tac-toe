
export function selectPiece(rowNumber, cellNumber, player, { dispatch, changeTurn }) {
  console.log({rowNumber, cellNumber, player, changeTurn});
  dispatch(changeTurn(player ? 0 : 1));
  return { rowNumber, cellNumber, player };
}
