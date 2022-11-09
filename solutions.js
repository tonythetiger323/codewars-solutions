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

// Is this a triangle?
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
const isTriangle = (a, b, c) => {
  // The sum of the sides of any 2 sides must be greater than the length of the third side
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
const descendingOrder = (n) => {
  // Convert n to a string and split into an array then map array to convert string back to a number
  const numArr = String(n)
    .split('')
    .map((str) => Number(str));
  return Number(
    numArr
      .sort((a, b) => b - a)
      .map((num) => String(num))
      .join('')
  );
  // Sort numArr into descending order
  //   const descArr = numArr.sort((a, b) => b - a);
  // map descArr convert each number to a string
  //   const sortStrArr = descArr.map(num => String(num));
  // join array into a string
  //   const sortStr = sortStrArr.join('');
  // convert sortStr to a number and return it
  //   return Number(sortStr);
};

// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    const sortedArgs = args.sort((a, b) => a - b);
    return sortedArgs[0];
  }
}

// Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.
const opposite = (number) => number * -1;

// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
const boolToWord = (bool) => (bool ? 'Yes' : 'No');

// Sum Arrays
/* Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
 */
const sum = (numbers) => {
  'use strict';
  let total = 0;
  if (!numbers.length) {
    return 0;
  } else {
    numbers.forEach((number) => (total += number));
  }
  return total;
};

// Convert a boolean to a string
// Implement a function which convert the given boolean value into its string representation.
const booleanToString = (b) => (b === true ? 'true' : 'false');

// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
const greet2 = (name) => {
  return `Hello, ${name} how are you doing today?`;
};
