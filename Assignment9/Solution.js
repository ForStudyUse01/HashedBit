// 1. let, const, var (scope difference)
function checkScope() {
  var a = "var variable\n";
  let b = "let variable\n";
  const c = "const variable";

  console.log("Q1:", a, b, c);
}
checkScope();


// 2. Fruits array + return second fruit
const fruits = ["apple", "banana", "mango", "orange", "grapes"];


function getSecondFruit() {
  return fruits[1];
}
console.log("Q2:", getSecondFruit());

// 3. push + pop
function modifyArray(arr) {
  arr.push("newItem");
  arr.pop();
  return arr;
}
console.log("Q3:", modifyArray(["a", "b", "c"]));

// 4. map → square numbers
function squareNumbers(arr) {
  return arr.map(num => num ** 2); // improved
}
console.log("Q4:", squareNumbers([1, 2, 3]));

// 5. filter → odd numbers
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Q5:", getOddNumbers([1, 2, 3, 4, 5]));

// 6. person object + greeting
const person = {
  name: "Yuvraj",
  age: 20,
  occupation: "Student"
};

function greetPerson(p) {
  console.log("Q6:", "Hello, my name is " + p.name + ", I am a " + p.occupation);
}
greetPerson(person);

// 7. rectangle area
function rectangleArea(obj) {
  return obj.width * obj.height;
}
console.log("Q7:", rectangleArea({ width: 5, height: 10 }));

// 8. get object keys
function getKeys(obj) {
  return Object.keys(obj);
}
console.log("Q8:", getKeys(person));

// 9. merge objects
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Q9:", mergeObjects({ a: 1 }, { b: 2 }));

// 10. reduce → sum
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Q10:", sumArray([1, 2, 3, 4]));
