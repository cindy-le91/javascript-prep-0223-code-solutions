/* exported tail */
function tail(array) {
  const numbers = [];
  for (let n = 1; n < array.length; n++) {
    numbers.push(array[n]);
  }
  return numbers;
}
