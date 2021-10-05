const numbers = [1, 2, 3, 5, 45, 37, 58,];

function sumAll(total) {
  let sum = 0;
  for (let num of total) {
    sum += num;
  }
  console.log(`Total: ${sum}`);
}

sumAll(numbers);
