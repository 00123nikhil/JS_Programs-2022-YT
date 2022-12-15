//JavaScript Tutorial in Hindi for Beginners [Part 17] - Operations on Array in JavaScript-Tech Gun

/**Template literal */
let str = "Nikhil";

let question = `hello, good morning, MY name is ${str}`;
console.log(question);

/**-------------------------------------------- */
/**to check lenght of string */
console.log(question.length);

/**--------------------------------------------------- */

/**fetch particular charater  */
console.log(question[10]);
//conentation

let str1 = "Nik";
if (str == str1) {
  console.log("both are equal string");
} else {
  console.log("diferent charater ");
}
//check whether charater starting from using indexof
let position = question.indexOf("good");
let position1 = question.toUpperCase();
let position2 = question.replace("good", "A very good");
console.log(position); // starting form ---> 7 position
console.log(position1);
console.log(position2);

/**--------------------------------------------------- */
/**array in js*/
//how to declare array
let subject = [
  "math",
  "science",
  "algebra",
  "history",
  "geopgraphy",
  "computer science",
]; //1st method of declare array
let subject1 = new Array(1, 2, 3, 4, 5); // 2nd method to declare array
console.log(subject);
// console.log(subject.length); //to check length of array

//to add one element in last
subject.push("push method");
//to add first in array
subject.unshift("unshift method");
console.log(subject);
//to remove last element
subject1.pop();
//to remove from beginning
subject1.shift(); //
//to remove middle
subject.splice(2, 1); //splice(from position to remove,how many to remove);

/**to empty the array using two method */
arr = [3, 5, 6, 7, 8, 9, 55];
// arr = []; //arr will be empty
// arr.length = 0; //arr will be empty

/**to know is arrry or not */
let b1 = "goodbook";
console.log(Array.isArray(b1)); //it shows -->false i.e not a array

/**to make a sentence to array using  */
let b2 = "hey,did you eat your food";
let wordarray = /*put here array name eg:b2*/ b2.split(" ");
console.log("sentence now in array form", wordarray);

/**to join a array as sentences */
let b3 = ["hey", "good", "yo", "yo"];
let joinarray = b3.join("-");
console.log("array join and show like senetence", joinarray);

/**to join 2 array  */
let jointwoarray = b3.concat(arr); //b3.concat(arr,subject,b4)-->join more array like this
console.log(jointwoarray);

/**tips :-->>> []-> use for array, ()-> use for function */

/**array in array or array inside array----> multidimensional array */
let arrayone = [
  ["facebook", "1m"], //index is 0
  ["instagram", "500m"], //index is 1
  ["snapchat" /**index 0 */, "20m" /**index 1 */], //index is 2
];

console.log(arrayone[0][1]);
console.log(arrayone[0]);

let multiarray = [
  [1, ["good", "bad"]],
  [2, 3],
  [3, 4],
];
console.log(multiarray[0][1][0]);

let num1 = ["a1", "a2", "b1"];
let num1length = num1.length;
for (i = 0; i < num1length; i++) {
  console.log(`element ${i} is ${num1[i]} \n`);
}

/**----------------- check prime number or not ----------------- */
let num,
  i,
  check = 0;
num = 19;
for (i = 2; i < num; i++) {
  if (num % 2 == 0) {
    check++;
    break;
  }
}
if (check == 0) document.write(" Prime Number");
else document.write("not a Prime Number");
