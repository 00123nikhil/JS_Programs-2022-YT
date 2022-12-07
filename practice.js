/* //practice.js is used to pratice purpose.

//templates literals
let a = "nik";
let b = `hey ${a}, how are you bro. hows your day ${a}`;
console.log(b);

//template litreal--> ``

// to check length of string
let ab = "nikhil  how is your day today";
console.log(ab.length);

//fetch particular character
console.log(ab[4]);
console.log(ab[10]);

let cocat = "nikhil";
let cocat1 = "borse";
console.log(cocat + "   " + cocat1);

if (cocat == cocat1) {
  console.log("both are equal");
} else {
  console.log("different characters");
}
 */

//index of character
// let a="hey nikhil, how are you!";
// let position=a.indexOf("hey");
// console.log(position)

// let aaa="the answer is"+a.indexOf("you")+" "+"th index ";
// console.log(aaa)

//toUpperCase
// let a='good morning';
// let position=a.toUpperCase()
// console.log(position)

let num = [1, 22, 3, 4, 5, 6];
console.log(num);
console.log(num[2]);
//second method to declare array
// let num1=new Array(2,45,6,33,54,4);
// console.log(num1);
// num.push('push method')
// console.log(num)
// num.unshift('unshift method');
// console.log(num)
let a = num.splice(2, 2);
console.log(a);
console.log(num);

let hey = [1, 2, 3, 4, 5];

console.log(hey);
console.log(Array.isArray(hey));

let sentence = "hey, i am sentences make me array";
let ml = sentence.split(" ");
console.log(ml);

let b2 = ["hey", "buddy"];
let b3 = b2.join(" ");
console.log(b3);

//join two array in js
let j = b2.join(hey);
console.log(j);

let inarray = [1, 2, ["g", "h", ["gaurav", "nikhil"]]];

console.log(inarray[2][0]);
console.log(inarray[2][2][1]);

let inone = [
  [1, 2],
  [2, 2],
  [3, 3],
];
console.log(inone[1][4]);

let num1 = ["a1", "a2", "b1"];
let num1length = num1.length;
for (i = 0; i < num1length; i++) {
  console.log(`element ${i} is ${num1[i]} \n`);
}

//functions in js
// function adding(a,b){
//   document.write("Addtion of two no is ",a+b);
// }

// adding(3,5);
// adding(3,5,1);

// function addfun(a){
//   if("Nikhil"==a){
//     document.write("correct");
//   }
//   else{
//     document.write("not correct try again");
//   }

// }
// // let a="Nikhil"
// addfun("Nikhil")

/* function arrfun(){
  let a=[1,2,3,4,5];
  return a;
}

// document.write(arrfun());
let templit=`hey look this is function and its contains ${arrfun}.`
document.write(templit); */
/* 
//anonymous function
let assign=function (){
  document.write("anonymous function");
}

console.log(assign) */

//immediately invoked function

(function () {
  console.log("wake up bro");
})();
