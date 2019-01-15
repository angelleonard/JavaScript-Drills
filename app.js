let name = 'Angel';
const stateNumber = 50;

var val = 5 + 4;

// Displays an alert that says Hello World!
function sayHello() {
  alert('Hello World!')
}
sayHello()

function checkAge(name, age) {
  if(age < 21) {
    alert("Sorry, " + name + " you aren't old enough to view this page!")
  }
}
  let people = [

    {
      name: 'Charles',
      age: 21
    },
    {
      name: 'Abby',
      age: 27
    },
    {
      name: 'James',
      age: 18
    },
    {
      name: 'John',
      age: 17
    }
  ];
  for (let i=0; i < people.length; i++){    
    checkAge(people[i].name,
      people[i].age)
  }
  let vegetables = ['broccoli', 'carrots', 'squash', 'green-beans']
  for (let j=0; j < vegetables.length; j++){
    console.log (vegetables[j])
  }