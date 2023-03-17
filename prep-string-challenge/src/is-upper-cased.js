/* exported isUpperCased */
function isUpperCased(word) {
  // loop through each letter of the string
  for (let n = 0; n < word.length; n++) {
    if (word[n] === word[n].toLowerCase()) {
      return false;
    // if letter is lowercased return false
    // return true
    }
  }
  return true;
}
isUpperCased('woof');
