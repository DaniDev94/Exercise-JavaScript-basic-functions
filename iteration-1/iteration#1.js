console.log("Prueba 1______________________________________________________________________________________________");
//Test 1 - (posible solución)

function sum(numberOne, numberTwo) {
  let numOne = ("" + numberOne).length;
  //numberOne.toString().length;(error al invocar la funcion sin pasarle parametros - Cannot read property 'toString' of undefined)
  let numTwo = ("" + numberTwo).length;
  //numberTwo.toString().length;(error al invocar la funcion sin pasarle parametros - Cannot read property 'toString' of undefined)
  numOne > numTwo ? console.log(`El número uno es mas largo que el número dos: ${numberOne} tiene ${numOne - numTwo} caractere mas que el número dos`) : 
  numTwo > numOne ? console.log(`El número dos el mas largo que el número uno: ${numberTwo} tiene ${numTwo - numOne} caractere mas que el número uno`) : numberOne === undefined && numberTwo === undefined ? console.log("No hay parametros en la invocación") : console.log("Ambos números tienen la misma longitud");
}

sum(1904, 67); //Número 1
sum(190, 6787); //Número 2
sum(1940, 2); //Número 1
sum(19, 7466); //Número 2
sum(19, 74); //Números iguales
sum(); //Sin parametros

console.log();
console.log("Prueba 2______________________________________________________________________________________________");

// Test 2 - (posible solución)
let number1 = 20455;
let number2 = 203;

function sum2(numberOne, numberTwo) {
  numberOne = number1;
  numberTwo = number2;
  let numLength1 = ("" + numberOne).length;
  let numLength2 = ("" + numberTwo).length;
  if (numLength1 > numLength2) {
    console.log(`El número uno es mas largo que el número dos: ${number1} tiene ${numLength1 - numLength2} caractere mas que el número dos`);
  } else if (numLength2 > numLength1) {
    console.log(`El número dos es mas largo que el numero uno: ${number2} tiene ${numLength2 - numLength1} caractere mas que el número uno`);
  } else {
    console.log("Ambos números tienen la misma longitud");
  };
};

sum2();

console.log();
console.log("Prueba 3______________________________________________________________________________________________");

// Test 3 - (posible solución)

function sum3(numberOne, numberTwo) {
  if (numberOne.toString().length > numberTwo.toString().length) {
    console.log(`NumberOne: ${numberOne}`);
  } else {
    console.log(`NumberTwo: ${numberTwo}`);
  };
};

sum3(5678, 700);
sum3(50, 700);
//sum3()--> Error - Cannot read property 'toString' of undefined



function sum() {
  console.log('Entrando en cero parametros');
}
sum();