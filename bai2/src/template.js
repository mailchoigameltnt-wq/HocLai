//basic template literal
const name = 'John';
const age = 30;

const message = `My name is ${name} and I'm{age} years old`;
console.log(message);

//multi-line template literal 
const multiLineString = 
	`This is a
	multi-line
	string.
`;

console.log(multiLineString);

const a = 10;
const b = 5;

const result= `${a} + ${b} equals ${a+b}`;

console.log(result) ;