/** @format */

// Exercise 1
// The following function returns true if the parameter age is greater than 18.

// Otherwise, it asks for a confirmation and returns its result.

const checkAge = (age) =>
  age > 18 ? true : "Do you have your parents permission to access this page?";

console.log(checkAge(15));
