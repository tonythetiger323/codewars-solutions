// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
const squareSum = (numbers) => {
  // initialize a variable that contains the sum
  let sum = 0;
  // iterate through the array and for each number square it then add it to the total
  numbers.forEach((num) => {
    sum += num * num;
  });
  return sum;
};

// Make a simple function called greet that returns the most-famous "hello world!".
const greet = () => {
  return 'hello world!';
};
