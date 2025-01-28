Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
recursion. Test the function with different inputs.

// Define the recursive factorial function
const factorial = (n) => {
    if (n === 0 || n === 1) { 
      return 1; // Base case: factorial of 0 or 1 is 1
    }
    return n * factorial(n - 1); // Recursive case
  };
  
  // Test the function with different inputs
  console.log(`Factorial of 5 is ${factorial(5)}`); // Output: 120
  console.log(`Factorial of 0 is ${factorial(0)}`); // Output: 1
  console.log(`Factorial of 7 is ${factorial(7)}`); // Output: 5040
  console.log(`Factorial of 10 is ${factorial(10)}`); // Output: 3628800
  