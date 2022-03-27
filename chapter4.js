// Sum of a Range

const range = (start, end, step = 1) => {
  const rangeArray = [];

  for (let value = start; value <= end; value += step) {
    rangeArray.push(value);
  }

  return rangeArray;
}

// console.log(range(3, 5));

const sum = (rangeArray) => {
  return rangeArray.reduce((sumOfArray, currentElement) => sumOfArray += currentElement)
}

// console.log(sum([3, 4, 5]))
// console.log(sum(range(1, 10)))

// Reversing an Array
const reverseArray = (array) => {
  return array.reduce((newArray, _, index) => {
    const nextIndex = array.length - 1 - index;
    newArray.push(array[nextIndex]);
    return newArray
  }, [])
}

// console.log(reverseArray([1, 2, 3]));

const reverseArrayInPlace = (array) => {
  const midpoint = array.length / 2;

  for (let currentIndex = 0; currentIndex < midpoint; currentIndex += 1) {
    const currentValue = array[currentIndex];
    const reverseIndex = array.length - currentIndex - 1;

    array[currentIndex] = array[reverseIndex];
    array[reverseIndex] = currentValue;
  }

  return array;
}

// console.log(reverseArrayInPlace([1, 2, 3]));

// A List

const arrayToList = (array) => {
  return array.reverse().reduce((list, currentValue) => {
    return {
      value: currentValue,
      rest: list,
    }
  }, {})
}

// console.log(arrayToList([1, 2, 3]))

const listToArray = (list) => {
  let array = [];
  while (list.rest) {
    array.push(list.value);
    list = list.rest;
  }

  return array;
}

// console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }))

const prepend = (newElement, list) => {
  return {
    value: newElement,
    rest: list,
  }
}

const nth = (wantedIndex, list) => {
  let value;
  

  for (let currentIndex = 0; currentIndex <= wantedIndex; currentIndex += 1) {
    value = list.value;
    list = list ? list.rest : {};
  }

  return value;
}

const recursiveNth = (list, wantedIndex, startIndex = 0) => {
  if (startIndex < wantedIndex) {
    return recursiveNth(list.rest, wantedIndex, startIndex += 1, )
  } else {
    return list.value;
  }
}

// console.log(nth(1, { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }))
// console.log(recursiveNth({ value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }, 2))

// Deep Comparison
const deepEqual = (object1, object2) => {
  if (typeof object1 !== typeof object2) {
    return false;
  } else {
    return isSameObject(object1, object2)
  }
}

const isSameObject = (object1, object2) => {
  if (object1 === object2) return true;
  if (object1 === null || object2 === null) return false;

  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) return false;
  for (const key of object1Keys) {
    if (object1[key] !== object2[key]) return false;
  }

  return true;
}

const isSameArray = (array1, array2) => {
}

console.log(deepEqual([1, 2], ['1', '2']))
console.log(deepEqual([1, 2], [1, 2]))
console.log(deepEqual([1, 2], null))
console.log(deepEqual(null, null))
console.log(deepEqual({'test': '1'}, {'test': '1'}))
console.log(deepEqual({'test': '1'}, {test: '1'}))
console.log(deepEqual({'test': '1'}, {'test': '2'}))
