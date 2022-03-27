// Minimum
const minimum = (value1, value2) => {
  return value1 < value2 ? value1 : value2
}

console.log(minimum(3, 5));
console.log(minimum(5, 3));

// Recursion
const isEven = (n) => {
  if (n < 0) {
    return isEven(-n);
  }

  if (n === 0) {
    return 'even';
  } else if (n === 1) {
    return 'odd';
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))

// Bean Counting
const countChars = (string, character) => {
  let count = 0;
  string.split('').forEach(char => {
    if (char === character) {
      count += 1;
    }
  })
  
  return count;
}

const countBs = (string) => {
  return countChars(string, 'B');
}

console.log(countBs('testingB'));
console.log(countBs('testingnob'));
console.log(countBs('testingBB'));