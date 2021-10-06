const duplicates = [
  "sushi", //no
  "pizza", //si
  "burger", //no
  "potatoe", //no
  "pasta", //si
  "ice-cream", //no
  "pizza", //si
  "chicken", //no
  "onion rings", //no
  "pasta", //si
  "soda", //no
];
/* const finalResult = ["sushi", "pizza", "burger", "potatoe", "pasta","ice-cream", "chicken","onion rings", "soda"]; */

function removeDuplicates(elemets) {
  var noRemove = [...new Set(elemets)];
  console.log(noRemove);
}

removeDuplicates(duplicates);


console.log("Prueba 2______________________________________________________________________________________________");


function repeatCounter2(elements) {
  let countElements = {};
  for (let i = 0; i < elements.length; i++) {
    countElements[elements[i]]++;
  }
  console.log(Object.keys(countElements))
}
repeatCounter2(duplicates);
