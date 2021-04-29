function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(x) {
  return x * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hi ' + name;
}

console.log(getGreeting('Paul'));

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var math = addAndMultiplyBy5(10, 5);
console.log(math);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var math1 = multiplyAndDivideBy5(35, 10);
console.log(math1);

function subtractTwoNumbers(x, y) {
  return x - y;
}

var math2 = subtractTwoNumbers(22, 7);
console.log(math2);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var math3 = getCircleCircumference(5);
console.log(math3);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(getFullName('Paul', 'Nguyen'));

function cube(x) {
  return x ** 3;
}

console.log(cube(5));
