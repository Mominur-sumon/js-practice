
function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

let result = calculator(10, 5, '+');
console.log(result); // 15
result = calculator(10, 5, '-');
console.log(result); // 5
result = calculator(10, 5, '*');
console.log(result); // 50
result = calculator(10, 5, '/');
console.log(result); // 2