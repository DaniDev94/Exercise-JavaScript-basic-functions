const duplicates = [               
  "sushi",//no
  "pizza",//si
  "burger",//no
  "potatoe",//no
  "pasta",//si
  "ice-cream",//no
  "pizza",//si
  "chicken",//no
  "onion rings",//no
  "pasta",//si
  "soda",//no
];
/* const finalResult = ["sushi", "pizza", "burger", "potatoe", "pasta","ice-cream", "chicken","onion rings", "soda"]; */

function removeDuplicates(elemets) {
    var noRemove = [...new Set(elemets)]
    console.log(noRemove);
};

removeDuplicates(duplicates);



