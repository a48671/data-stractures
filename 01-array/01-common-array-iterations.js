// Common array iterations

const myFriends = ['Jason Born', 'Jack Richer', 'Steve Rogers', 'Tony Stark', 'Tor'];
const weightsOfMyFriends = [87, 78, 92, 78, 100];

// I can print out every item of an array by using for loop
for (let index = 0; index < myFriends.length; index++) {
  const name = myFriends[index];
  const weight = weightsOfMyFriends[index];

  console.log(`I have a friend, his name is ${name} and his weight is ${weight} kl`);
}

// I can calculate an average value of all items in an array
let totalWeight = 0;
for (let index = 0; index < myFriends.length; index++) {
  totalWeight += weightsOfMyFriends[index];
}
const averageWeight = totalWeight / myFriends.length;
console.log(`The average weight of all of my friends is ${averageWeight} kl`);

// I can find the lowes or highest value in an array
let lowestWeight = weightsOfMyFriends[0];
let highestWeight = weightsOfMyFriends[0];
for (let index = 0; index < myFriends.length; index++) {
  const weight = weightsOfMyFriends[index];
  if (lowestWeight === undefined || lowestWeight > weight) {
    lowestWeight = weight;
  }
  if (highestWeight === undefined || highestWeight < weight) {
    highestWeight = weight;
  }
}
console.log(`The lowest weight is ${lowestWeight} kl, and the highest weight is ${highestWeight} kl.`)
