// Even numbers
console.log("Q1:");
for (let num = 1; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// Calculator
function operate(x, y, choice) {
    let result;

    switch (choice) {
        case 'add':
            result = x + y;
            break;
        case 'sub':
            result = x - y;
            break;
        case 'mul':
            result = x * y;
            break;
        case 'div':
            result = y !== 0 ? x / y : "Error";
            break;
        default:
            result = "Wrong input";
    }

    return result;
}

console.log("Q2:", operate(10, 5, 'add'));

// Tax
function calculateTax(income) {
    let tax = 0;

    switch (true) {
        case income <= 500000:
            tax = 0;
            break;
        case income <= 1000000:
            tax = income * 0.10;
            break;
        case income <= 1500000:
            tax = income * 0.20;
            break;
        default:
            tax = income * 0.30;
    }

    return tax;
}

console.log("Q3:", calculateTax(1200000));

// Digit product sum
function sumOfProducts(a, b) {
    let sum = 0;

    while (a > 0 || b > 0) {
        let d1 = a % 10;
        let d2 = b % 10;

        sum += d1 * d2;

        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
    }

    return sum;
}

console.log("Q4:", sumOfProducts(6, 34));