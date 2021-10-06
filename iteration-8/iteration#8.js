const counterWords = ["code", "repeat", "eat", "sleep", "code", "enjoy", "sleep", "code", "enjoy", "upgrade", "code"];

/* Results:
* code = 4
* repeat = 0
* eat = 0
* sleep = 2 
* enjoy = 2
* upgrade = 0
*/


function repeatCounter2(count) {
    var repetidos = {};
    count.forEach(function(e){
      repetidos[e] = (repetidos[e] || 0) + 1;
    });
    console.log(repetidos);
  }
  
  
repeatCounter2(counterWords)


console.log('___________________________________________________')

// countWords[words[i]] nos devuelve un objeto con los valores sin repetir en forma de clave

function repeatCounter(words) {
  let countWords = {};
  for (let i = 0; i < words.length; i++) {
      if(countWords[words[i]]){
        countWords[words[i]] += 1
      } else {
        countWords[words[i]] = 1
      };
    };
  return countWords;
 };

let result = repeatCounter(counterWords);
console.log(result);














/* function repeatCounter(words) { 
    let countWords = { word:'', count:''}
    for(let i = 0; i < words.length; i++){
        if(words[0] == words[i]){
            console.log(words[i])
        }
    }
  }

repeatCounter(counterWords) */