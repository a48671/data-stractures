// Two dimensional array

const arr = [
  [12, 34, 56, 23, 89],
  [34, 45, 88, 34, 90],
  [56, 22, 35, 90, 35],
  [23, 77, 66, 23, 66],
  [78, 44, 34, 87, 55],
];

function largestProduct(arr) {
  let
    largest = 0,
    row1 = 0,
    col1 = 0,
    row2 = 0,
    col2 = 0;

  function getCell(row, col) {
    if (row < 0 || col < 0 || row >= arr.length || col >= arr[row].length) {
      return 0;
    }
    return arr[row][col];
  }

  function handleCells(r1, c1, r2, c2) {
    const res = getCell(r1, c1) * getCell(r2, c2);
    if (res > largest) {
      largest = res;
      row1 = r1;
      col1 = c1;
      row2 = r2;
      col2 = c2;
    }
  }

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
       handleCells(row, col, row - 1, col); // top
       handleCells(row, col, row + 1, col); // bottom
       handleCells(row, col, row, col - 1); // left
       handleCells(row, col, row, col + 1); // right
    }
  }


  return { largest, row1, col1, row2, col2 };
}
const { col1, col2, largest, row1, row2 } = largestProduct(arr);
console.log(`${arr[row1][col1]} * ${arr[row2][col2]} = ${largest}`);
