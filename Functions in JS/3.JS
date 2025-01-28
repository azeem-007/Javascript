Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
immediately displays the result.

// IIFE to calculate the square of a number and display the result
(function(num) {
    const square = num * num;
    console.log(`The square of ${num} is ${square}`);
  })(6); 
  