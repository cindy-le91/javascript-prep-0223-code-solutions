/* Your JS goes in this file */
const age = 31;
function isAdult(age) {
  return age > 18;
}
const isAdultResult = isAdult(age);
console.log(isAdultResult);

const student1Score = 93;
function didStudentPass(score) {
  return score > 70;
}
const didStudentPassResult = didStudentPass(student1Score);
console.log(didStudentPassResult);

const student2Score = 65;
function gradeCalculator(score) {
// If the parameter score is less than 60, return the string 'F'.
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));

const season = 'spring';

function seasonMessenger(season) {
// If the parameter season is strictly equal to 'summer', return the string 'it's hot today'.
  if (season === 'summer') {
    return 'it\'s hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it\'s cold today';
  } else {
    return 'enter a valid season';
  }
}
console.log(seasonMessenger(season));

const dayOfTheWeek = 'Thursday';
function dayDetector(dayOfTheWeek) {
// If the parameter dayOfTheWeek is strictly equal to 'saturday' or if the parameter dayOfTheWeek is strictly equal to 'sunday', return the string 'have a good weekend!' from the function.
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else {
    return 'It\'s a weekday!';
  }
}
console.log(dayDetector(dayOfTheWeek));
