function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumbersResults = (addTwoNumbers(4, 3));
console.log('addTwoNumbers Exercise:', addTwoNumbersResults);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const convertHoursToMinutesResults = (convertHoursToMinutes(4));
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResults);

function getGreeting(name) {
  return '"Hello ' + name + '!"';
}

const getGreetingResults = (getGreeting('World'));
console.log('getGreeting Exercise:', getGreetingResults);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addAndMultiplyBy5Results = (addAndMultiplyBy5(6, 3));
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyAndDivideBy5Results = (multiplyAndDivideBy5(10, 12));
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractTwoNumbersResults = (subtractTwoNumbers(7, 4));
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}

const getCircleCircumferenceResults = (getCircleCircumference(8));
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  return '"' + firstName + ' ' + lastName + '"';
}

const getFullNameResults = (getFullName('Cindy', 'Le'));
console.log('getFullName Exercise:', getFullNameResults);

function cube(number) {
  return number * number * number;
}

const cubeResults = (cube(9));
console.log('cubeResults Exercise:', cubeResults);
