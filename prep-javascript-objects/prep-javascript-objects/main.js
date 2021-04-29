var person = {
  firstName: 'Paul',
  lastName: 'Nguyen',
  hobby: 'Soccer',
  job: 'Hustler',
  previousJob: 'Go-Getter'
};
console.log(person);
var fullName = 'My name is ' + person.firstName + ' ' + person.lastName;
console.log(fullName);
var currentJob = 'My job is ' + person.job;
console.log(currentJob);
var lastJob = 'My previous job is ' + person.previousJob;
console.log(lastJob);

console.log(person);

var myCar = {
  make: 'Tesla',
  model: 'Model 3',
  year: '2019',
  owner: fullName,
  color: 'blue'
};

console.log(myCar['owner'] + ' and I drive a' + ' ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model']);
console.log(myCar);
