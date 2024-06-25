// Pairwise comparison in an array

const numbers = [12, 15, 45, 34, 90, 56, 36];

let largestDelta = numbers[0] - numbers[1];

for (let index = 1; index < numbers.length; index++) {
  const delta = Math.abs(numbers[index - 1] - numbers[index]);

  if (largestDelta < delta) {
    largestDelta = delta;
  }
}

console.log(`The largest delta is ${largestDelta}`);
