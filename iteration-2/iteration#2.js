console.log("Prueba 1______________________________________________________________________________________________");

const avengers = ["Hulk", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M."];
// console.log('avengers-->',avengers[0].length); = 4 
let total = avengers[0]
function findLongestWord(heroes) {
    for(let hero of heroes){
        // console.log('hero-->',hero.length) = 4, 4, 7, 10, 9, 10
        if(hero.length > total.length){
           total = hero;
        };
    };
  console.log(total)
}

findLongestWord(avengers);
