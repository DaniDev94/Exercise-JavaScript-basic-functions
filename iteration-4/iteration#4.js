const numbers = [12, 21, 38, 5, 45, 37, 6];

let sum = 0;
function average(total) {
  for (let num of total) {
    sum += num;
  }
  let div = sum / total.length;
  return div;
};

console.log(average(numbers));
