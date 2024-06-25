// Array can be sorted in two ways: ascending or descending
// And we have to return true if a given array sorted by one of these ways
// We can have some cases that definitely return true:
// - en empty array [] -> true,
// - en array with one element [2] -> true,
// - en array with two elements [1, 6] -> true
function isSorted(arr) {
  // Check length of array and make a decision ether we need to go through the array, or we can immediately return true;
  if (arr.length < 3) {
    return true;
  }
  // Defined what is type of sorting we will check (-1 or 1);
  // Go through the array and check whether order of elements is correct or not
  let typeOfSorting = 0;
  for (let i = 1; i < arr.length; i++) {
    const v1 = arr[i - 1];
    const v2 = arr[i];

    const diff = v2 - v1; // 0 -number or +number;

    if (typeOfSorting === 0 && diff !== 0) {
      typeOfSorting = diff > 0 ? 1 : -1;
    }

    if (typeOfSorting < 0) {
      if (v1 < v2) {
        return false;
      }
    } else {
      if (v1 > v2) {
        return false;
      }
    }
  }

  return true;
}

console.log('It has to return true');
console.log(isSorted([]));
console.log(isSorted([1]));
console.log(isSorted([1, 5]));
console.log(isSorted([5, 1]));
console.log(isSorted([5, 1, 0, -5, -9]));
console.log(isSorted([1, 4, 6, 78, 100]));
console.log('It has to return false');
console.log(isSorted([1, 4, 0]));
console.log(isSorted([1, 4, 5, 6, 3]));
console.log(isSorted([9, 6, 4, 8]));

// And we can solve this problem another way
// Lets imaging that we check whether an array is sorted in ascending order.
// So we can do it this way:
function isArraySorted(arr) {
  // Let's start form defining variables that will determine the result of this function
  let
    isDescending = true,
    isAscending = true; // In the end they are true, but if farther we will find out that it's not correct we will pass false to it

  // Now we can check every pare of elements and change this value if something is wrong
  for (let i = 1; i < arr.length; i++) {
    const
      v1 = arr[i - 1],
      v2 = arr[i];

    if (v1 > v2) {
      isAscending = false;
    }

    if (v1 < v2) {
      isDescending = false;
    }
  }

  return isAscending || isDescending;
}

console.log('It has to return true');
console.log(isArraySorted([]));
console.log(isArraySorted([1]));
console.log(isArraySorted([1, 5]));
console.log(isArraySorted([5, 1]));
console.log(isArraySorted([5, 1, 0, -5, -9]));
console.log(isArraySorted([1, 4, 6, 78, 100]));
console.log('It has to return false');
console.log(isArraySorted([1, 4, 0]));
console.log(isArraySorted([1, 4, 5, 6, 3]));
console.log(isArraySorted([9, 6, 4, 8]));
