const arr = [3, 4, 6, 3, 0, 0, 6, 2, 6, 7, 2, 4, 7, 3, 5];

// In order to sort this array I can do the next steps:
// 1. Find the least number and the largest number;
// 2. Create new array with size equals the largest number + 1
// 3. Now each index of a new array represents on of the numbers from the given array
// 4. For each index count numbers with the same value
// 5. Create a new array and fill it according the previous array

function tallySort(arr) {
  let
    least = arr[0],
    largest = arr[0];

  for (const num of arr) {
    least = Math.min(least, num);
    largest = Math.max(largest, num);
  }

  const tallyArray = new Array(largest + 1).fill(0);

  for (const num of arr) {
    tallyArray[num] = tallyArray[num] + 1;
  }

  const result = [];

  let i = least;
  while (i < tallyArray.length) {
    const num = tallyArray[i];
    if (num > 0) {
      result.push(i);
      tallyArray[i] = num - 1;
    } else {
      i++;
    }
  }

  return result;
}

console.log(tallySort(arr));
