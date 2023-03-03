const person = {
  firstName: 'Cindy',
  lastName: 'Le',
  hobby: 'reading'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is: ' + fullName + '.');

person.Job = 'sleeping';
console.log('The person\'s current job is: ' + person.Job + '.');

person['previousJob'] = 'walking';
console.log('The person\'s previous job is: ' + person.previousJob + '.');

console.log('The complete person object: ', person);
