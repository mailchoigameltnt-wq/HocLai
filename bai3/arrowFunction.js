//2parameter
let greet = (name, timeOfDay) => {
	console.log(`Good ${timeOfDay}, ${name}!`);
};
greet('Alice','morning')

greet('Bob', 'evening')
//1parameter
let square = num => {
	return num * num;
};
console.log(square(5));
console.log(square(8));

//0parameter

let sayHello = () => {
	console.log("Hello there!")
}
sayHello();
//object

let person = {
name: "John",
age: 30,
greet: function() {
	console.log(`Hello, my name is ${this.name} and I'm ${this.age}years old.`);
}
};

person.greet();

//array destructuring

const numbers = [1,2,3,4,5];

const [a,b, ...rest] = numbers;

console.log(a);
console.log(b);
console.log(rest);

//object destructuring

const person1 = {
name:'John Doc',
age:30,
city: 'New York'
};

const {name,age,city} = person1;
console.log(name);
console.log(age);
console.log(city);

//default parameters
function greet1(name= 'Guest') {
	console.log(`Hello ${name}!`);
}

greet1();
greet1('John')

function createFullName(firstName, lastName = 'Doe') {
	console.log(`${firstName} ${lastName}`);
}

createFullName('John');
createFullName('Jane','smith');



