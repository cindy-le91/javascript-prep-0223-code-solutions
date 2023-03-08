// create your loops here.
function whileLoop1() {
  // This function should create a new array.
  const numbers = [];
  // This function should use a while loop to loop 10 times and use the push method to add the numbers 0 - 9 into the new array.
  let n = 0;
  while (n < 10) {
    numbers.push(n);
    n++;
  }
  return numbers;
// This function should return the new array with the numbers 0 - 9.
}
console.log('whileLoop1 output:', whileLoop1());

function whileLoop2() {
  const numbers = [];
  let n = 0;
  while (n < 19) {
    numbers.push(n);
    n = n + 2;
  }
  return numbers;
}
console.log('whileLoop2 output:', whileLoop2());

function forLoop1() {
  const numbers = [];
  for (let n = 0; n < 10; n++) {
    numbers.push(n);
  }
  return numbers;
}
console.log('forLoop1 output:', forLoop1());

function forLoop2() {
  for (let n = 100; n > 0; n--) {
    console.log('Time till explosion' + n + '!');
  }
}
forLoop2();

// Create a function named forInLoop1 which takes one parameter object.
// This function should create a new array.
// This function should use a for...in loop through the object and use the push method to add all of the property names on the object to the new array.
// This function should return the new array with the property names from the object.

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};
function forInLoop1(object) {
  const array = [];
  for (const x in object) {
    array.push(x);
  }
  return array;
}
console.log('for in loop 1 output', forInLoop1(object));

// This function should create a new array.
// This function should use a for...in loop through the object and use the push method to add all of the property values on the object to the new array.
// This function should return the new array with the property values from the object.

function forInLoop2(object) {
  const array = [];
  for (const x in object) {
    array.push(object[x]);
  }
  return array;

}
console.log('for in loop 2 output', forInLoop2(object));
