Q4. Generate numbers between any 2 given numbers.

function generateNumbersBetween(start, end) {
    let numbers = [];

    for (let i = start + 1; i < end; i++) {
        numbers.push(i);
    }

    return numbers;
}

// Example usage:
let startNumber = 5;
let endNumber = 10;
let generatedNumbers = generateNumbersBetween(startNumber, endNumber);
console.log(generatedNumbers); // Output: [6, 7, 8, 9]
