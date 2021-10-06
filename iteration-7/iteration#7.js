const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

// Searching by value

function finderName(finder, value) {
  let exist = false;
  finder.forEach(function (e, i) {
    if (e === value) {
      console.log(`${!exist} --> Here's a coincidence with ${e}. Position: ${i}`);
    } else {
      console.log(`${exist} --> Elemetn dont exist! Element name: ${e}`);
    }
  });
}

finderName(nameFinder, "Natasha");

console.log("__________________________________________________________________________________");
console.log();

const nameFinder2 = [
  "Peter",
  "Steve",
  "Tony",
   true,
  "Natasha",
  "Clint",
  66786754,
  "Logan",
  "Xabier",
  65748,
  "Bruce",
  "Peggy",
  false,
  "Jessica",
  "Marc",
  67866754,
];

// Searching by data type

function finderName2(finder, type) {
  let exist = false;
  finder.forEach(function (e, i) {
    if(typeof e === type){
      exist = true;
      console.log(`Exist: ${exist} --> Position: ${i} --> Element: ${e} --> Type: ${typeof e}`)
    } else {
      exist = false;
      console.log(`Exist: ${exist} --> Element: ${e} ---> Type: ${typeof e}`)
    }
  });
};

finderName2(nameFinder2, "string" );
// finderName2(nameFinder2, "boolean" );
// finderName2(nameFinder2, "number" );

