// const sayHello = function() {
//   console.log("Hello");
// };

// const sayHello = () => {
//   console.log("Hello");
// };

// One Line Arrow Functions Does Not Need Braces

// const sayHello = () => console.log("Hello ");

// One Line Returns
// const sayHello = () => "Hello";

// Traditional Return
// const sayHello = function() {
//   return "Hello";
// };

// Arrow Functions with Object Literal
// const sayHello = () => ({
//   msg: "Hello"
// });

// Arrow Functions with Single Parameter (No parethesis needed)
// const sayHello = name => console.log(`Hello ${name}`);

// Arrow Functions with Mulitiple Parameters (Need Parenthesis)
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);
// sayHello("Heather", "Herries");

// Callbacks
const users = ["Nathan", "John", "William"];

// const nameLength = users.map(function(name) {
//   return name.length;
// });

// Callbacks as an Arrow Function
// const nameLength = users.map(name => {
// return name.length;
// });

// Callbacks as an Even Shorter Arrow Function
const nameLength = users.map(name => name.length);

console.log(nameLength);
