const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(elements) {
  let numTotal = 0;
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    if (typeof(element) === "number") numTotal += element; 
    if (typeof(element) === "string") numTotal += element.length
  }
  console.log(`Resultado total: ${numTotal}`)
}

averageWord(mixedElements);
