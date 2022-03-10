const { SCRIPTS } = require('./scripts.js');

//// Flattening
const unflattened = [[1, 2], ['a', 'b']];

const flattened = unflattened.reduce((endArray, subArray) => {
  subArray.forEach(element => endArray.push(element));

  return endArray;
}, [])

// console.log(flattened);

//// Your Own Loop

const update = (initialValue, testFunction, updateFunction, bodyFunction) => {
  let value = initialValue;

  while (testFunction(value)) {
    bodyFunction(value)
    value = updateFunction(value)
  }
}

const isUnder10 = value => value < 10;
const sayMyName = value => console.log(`${value} `.repeat(value));
const add1 = value => value += 1;

// update(3, isUnder10, add1, sayMyName);

//// Everything
const every = (array, testFunction) => {
  let result = true;

  for (const element of array) {
    if (!testFunction(element)) {
      result = false;
      break;
    }
  }

  return result
}

// console.log(every([1, 3, 50], isUnder10))

const every2 = (array, testFunction) => {
  if (array.some(element => !testFunction(element))) return false;
}

// console.log(every([1, 3, 5], isUnder10))


//// Dominant Writing Direction
const dominantDirection = (text) => {
  const directionCounts = {
    ltr: 0,
    rtl: 0,
    ttb: 0,
  }

  text.split('').forEach((char) => {
    const charCode = char.charCodeAt(0)
    const applicableScript = SCRIPTS.find(script => {
      return script.ranges.some(range => charCode >= range[0] && charCode <= range[1])
    })

    if (applicableScript) {
      const direction = applicableScript.direction;
      directionCounts[direction] += 1
    }
  })

  return directionCounts;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
