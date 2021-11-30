const listOfNumbers = process.argv;
let newListOfNumbers = [];
for (let i = 2; i < listOfNumbers.length; i++) {
  if (listOfNumbers[i] > 0 && !isNaN(listOfNumbers[i])) {
    newListOfNumbers.push(listOfNumbers[i]);
  }
}
//sorted array is newListOfNumbers
newListOfNumbers = newListOfNumbers.sort(function(a,b) {
  return a - b;
});

for (let i of newListOfNumbers) {
  setTimeout(() => {
    process.stdout.write(`${i} seconds\x07\n`);
  }, i * 1000);
}