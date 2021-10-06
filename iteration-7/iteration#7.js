const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];



function finderName(finder, value) {
   let exist = false;
   finder.forEach(function(e,i){
    if(e === value){
      console.log(`${!exist} --> Here's a coincidence with ${e}. Position: ${i}`)
    } else {
      console.log(`${exist} --> Elemetn dont exist! Element name: ${e}`);
    };
   });
};
  
finderName(nameFinder, 'Tony');