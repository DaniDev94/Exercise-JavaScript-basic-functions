const numbers = [1, 2, 3, 5, 45, 37, 58];

let sum = 0;
function sumAll(total) {
    for (let num of total){
        sum += num
    };
    console.log(sum);
};

sumAll(numbers);