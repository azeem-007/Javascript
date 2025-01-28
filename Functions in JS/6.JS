Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
version of that function. The curried function should accept arguments one at a time and return a new
function until all arguments are provided. Then, it should execute the original function with all arguments.
Test the curry function with a function that adds two numbers.


// Curry function
const curry = (fn) => {
    const curried = (...args) => {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return (...nextArgs) => curried(...args, ...nextArgs);
      }
    };
    return curried;
  };
  
  // Function to add two numbers
  const add = (a, b) => a + b;
  
  // Curried version of the add function
  const curriedAdd = curry(add);
  
  // Test the curried function with two numbers
  console.log(curriedAdd(2)(3)); // Output: 5
  