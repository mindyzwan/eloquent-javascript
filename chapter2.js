// Looping a Triangle
const triangle = () => {
  for (let line = 1; line <= 7; line += 1) {
    console.log('#'.repeat(line));
  }
}

triangle();

// FizzBuzz
const fizzBuzz = () => {
  for (let number = 1; number <= 100; number +=1) {
    if (number % 5 === 0 && number % 3 === 0) {
      console.log('fizzbuzz');
    } else if (number % 5 === 0) {
      console.log('buzz');
    } else if (number % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(number)
    }
  }
  console.log(' ');
}

fizzBuzz();

// Chessboard
const constructBoard = (size) => {
  for (let row = 1; row <= size; row += 1) {
    let line;

    for (let col = 1; col <= size; col += 1) {
      if (row % 2 === 0) {
        line = '# '.repeat(size / 2);
        if (line.length < size) line += '#';
      } else {
        line = ' #'.repeat(size / 2);
        if (line.length < size) line += ' ';
      }
    }
    console.log(line);
  }
}

constructBoard(4);