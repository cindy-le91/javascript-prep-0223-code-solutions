/* exported compact */
function compact(array) {
  // filter, omit false values from array
  const numbers = [];
  for (let n = 0; n < array.length; n++) {
    // if
    if (array[n]) {
      numbers.push(array[n]);
    }
    // omit false from array
  }
  return numbers;
}

//
compact([true, true, false, true]); // [true, true, true]
