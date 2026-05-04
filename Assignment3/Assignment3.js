// Q1) (State Filter Logic)
const states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Kerala", "Assam"];

const res1 = states.filter(state => {
    let ch = state[0].toLowerCase();
    return !("aeiou".split("").some(v => v === ch));
});
console.log("Q1:", res1);



// Q2) (Word Reverse Engine)
let str = "I love my India";

let words = str.split(" ");
let res2 = "";

for (let i = words.length - 1; i >= 0; i--) {
    res2 += words[i] + " ";
}

console.log("Q2:", res2.trim());



// Q3) (Splice Transformation)
let string = "INDIA";
let arr = [...string];

arr.splice(3, 0, "O", "N", "E", "S");

console.log("Q3:", arr.join(""));



// Q4) (Character Counter)
let text = "JavaScript makes web development powerful";

let vowels = 0, consonants = 0;

for (let char of text.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
        if ("aeiou".indexOf(char) !== -1) vowels++;
        else consonants++;
    }
}

console.log("Q4: Vowels =", vowels, "Consonants =", consonants);



// Q5) (Text Correction Tool)
function correctfn(str, wrong, correct) {
    let pattern = new RegExp(wrong, "g");
    return str.replace(pattern, correct);
}

console.log("Q5:", correctfn("I has has a pen", "has", "have"));



// Q6) (Number Filter)
let inputArr = [1,2,3,9,10,7,5,4,3];

let res6 = [];

inputArr.forEach(num => {
    if (num > 5) res6.push(num);
});

console.log("Q6:", res6);



// Q7) (Average Calculator)
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const res7 = students.map(student => {
    let sum = 0;

    for (let score of student.scores) {
        sum += score;
    }

    return {
        name: student.name,
        average: sum / student.scores.length
    };
});

console.log("Q7:", res7);



// Q8) (Digit Reducer)
function digitReducer(num) {
    while (num >= 10) {
        let sum = 0;
        for (let digit of num.toString()) {
            sum += Number(digit);
        }
        num = sum;
    }
    return num;
}

console.log("Q8:", digitReducer(456));



// Q9) (Word Counter)
function countWords(str) {
    let words = str.trim().split(" ");
    let count = 0;

    for (let w of words) {
        if (w !== "") count++;
    }

    return count;
}

console.log("Q9:", countWords("This is a sample paragraph for testing"));



// Q10) (String Reverse)
function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log("Q10:", reverseString("Hello"));



// Q11) (Object Average Processor)
const data = {
    student1: {subject1:44, subject2:56, subject3:87, subject4:97, subject5:37},
    student2: {subject1:44, subject2:56, subject3:87, subject4:97, subject5:37},
    student3: {subject1:44, subject2:56, subject3:87, subject4:97, subject5:37}
};

let res11 = [];

for (let key in data) {
    let total = 0;
    let count = 0;

    for (let subject in data[key]) {
        total += data[key][subject];
        count++;
    }

    res11.push({
        [key]: {
            average: Math.floor(total / count)
        }
    });
}

console.log("Q11:", res11);