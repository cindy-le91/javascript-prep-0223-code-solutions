/* exported initial */
function initial(array) {
  const numbers = [];
  for (let n = 0; n < array.length - 1; n++) {
    numbers.push(array[n]);
  }
  return numbers;
}
