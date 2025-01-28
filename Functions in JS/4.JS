Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes.

// Function to create tax calculator
const calculateTax = () => {
    const taxRates = [
      { min: 0, max: 25000, rate: 0.1 },
      { min: 25001, max: 50000, rate: 0.2 },
      { min: 50001, max: 100000, rate: 0.3 },
      { min: 100001, max: Infinity, rate: 0.4 }
    ];
  
    return (income) => {
      for (let bracket of taxRates) {
        if (income >= bracket.min && income <= bracket.max) {
          return income * bracket.rate;
        }
      }
      return 0; // In case no tax bracket is found (shouldn't happen with the given rates)
    };
  };
  
  // Create the tax calculator function
  const taxCalculator = calculateTax();
  
  // Test the function with various incomes
  let income1 = 15000;
  let income2 = 35000;
  let income3 = 75000;
  let income4 = 120000;
  
  console.log(`Tax for income ${income1} is ${taxCalculator(income1)}`);
  console.log(`Tax for income ${income2} is ${taxCalculator(income2)}`);
  console.log(`Tax for income ${income3} is ${taxCalculator(income3)}`);
  console.log(`Tax for income ${income4} is ${taxCalculator(income4)}`);
  