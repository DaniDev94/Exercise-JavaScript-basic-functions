console.log("Prueba 1______________________________________________________________________________________________");

const avengers = ["Hulk", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M."];
// console.log('avengers-->',avengers[0].length); = 4 
function findLongestWord(heroes) {
let total = heroes[0]
    for(let hero of heroes){
        // console.log('hero-->',hero.length) = 4, 4, 7, 10, 9, 10
        if(hero.length > total.length){
           total = hero;
        };
    };
  console.log(total)
}

findLongestWord(avengers);
