const bombsField = [
  ['*', '*', '',  ''],
  ['*', '*', '',  ''],
  ['',  '',  '*', ''],
  ['',  '',  '',  ''],
];

// * * 2 0
// * * 3 1
// 2 3 * 1
// 0 1 1 1

function bombSweeper(bombsField) {
  const handledField = new Array(bombsField.length).fill([])
    .map(() => new Array(bombsField[0].length));

  function checkCell(row, col) {
    console.log('checkCell', row, col)
    if (row < 0 || row >= bombsField.length || col < 0 || col >= bombsField[row].length) {
      return 0;
    }

    return bombsField[row][col] === '*' ? 1 : 0;
  }

  function calculateAllClosestCells(row, col) {
    const top = checkCell(row - 1, col);
    const bottom = checkCell(row + 1, col);
    const left = checkCell(row, col - 1);
    const right = checkCell(row, col + 1);
    const topLeft = checkCell(row - 1, col - 1);
    const topRight = checkCell(row - 1, col + 1);
    const bottomLeft = checkCell(row + 1, col - 1);
    const bottomRight = checkCell(row + 1, col + 1);

    return top + bottom + left + right + topLeft + topRight + bottomLeft + bottomRight;
  }

  for (let row = 0; row < bombsField.length; row++) {
    for (let col = 0; col < bombsField[row].length; col++) {
      let bombs = '';

      if (checkCell(row, col) === 1) {
        bombs = '*';
      } else {
        bombs = calculateAllClosestCells(row, col);
      }

      handledField[row][col] = bombs;
    }
  }

  return handledField;
}

console.table(bombSweeper(bombsField));
