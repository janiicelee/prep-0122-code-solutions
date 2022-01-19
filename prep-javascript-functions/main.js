function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('Janice');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var resultNum = addAndMultiplyBy5(10, 5);
console.log(resultNum);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var result = multiplyAndDivideBy5(35, 10);
console.log(result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractResult = subtractTwoNumbers(22, 7);
console.log(subtractResult);

function getCircleCircumference(radius) {
  return radius * 2 * 3.141592;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Janice', 'Lee');
console.log(fullName);

function cube(number) {
  return number * number * number;
}

var cubeValue = cube(5);
console.log(cubeValue);
