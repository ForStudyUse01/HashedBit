// 1. let, const, var (scope difference)
function checkScope() {
  var a = "var variable";     // function scope
  let b = "let variable";     // block scope
  const c = "const variable"; // block scope
 
  console.log(a, b, c);
}
 
// 2. Fruits array + return second fruit
const fruits = ["apple", "banana", "mango", "orange", "grapes"];
 
function getSecondFruit() {
  return fruits[1];
}
 
// 3. push + pop
function modifyArray(arr) {
  arr.push("newItem"); // add
  arr.pop();           // remove
  return arr;
}
 
// 4. map → square numbers
function squareNumbers(arr) {
  return arr.map(num => num * num);
}
 
// 5. filter → odd numbers
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
 
// 6. person object + greeting
const person = {
  name: "Kirti",
  age: 18,
  occupation: "Student"
};
 
function greetPerson(p) {
  console.log("Hello, my name is " + p.name + ", I am a " + p.occupation);
}
 
// 7. rectangle area
function rectangleArea(obj) {
  return obj.width * obj.height;
}
 
// 8. get object keys
function getKeys(obj) {
  return Object.keys(obj);
}
 
// 9. merge objects
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
 
// 10. reduce → sum
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}