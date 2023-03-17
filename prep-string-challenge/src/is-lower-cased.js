/* exported isLowerCased */
function isLowerCased(word) {
  // loop through each letter of the string
  for (let n = 0; n < word.length; n++) {
    if (word[n] === '-') {
      continue;
    }
    if (word[n] === word[n].toUpperCase()) {
      return false;
      // if letter is uppercased return false
      // return true
    }
  }
  return true;
}
