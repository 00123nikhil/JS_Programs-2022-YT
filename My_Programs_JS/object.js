//JavaScript Tutorial in Hindi for Beginners [Part 26] - Object Properties in JavaScript

/**Tips:>>>> camel case === eg: lastName, firsName, googleTeam etc */

/**---------------------------------------------------------------------------------- */
/**object in js */
let person = {
  name: "Nikhil",
  city: "Aurangabad",
  day: "Monday",
  day2: "goodday",
};

console.log(person.name); //calling object
console.log(person["day"]); //anther mtd calling object

//to modify the property object
person.name = "Nik";

//add new property
person.address = "Project nagar,projectbad";

//delete property
delete person.day2;

console.log(person.name);
console.log(person);

//check property in object or not using  in opertor
console.log("height" /*height is a property in object */ in person); //return in true or false

//to get one by one value or illuarte property using for in loop
for (let key in person) {
  console.log(key); //showing all property in person object.
  console.log(key + ": " + person[key]); //dot notation--> . || array notation ==> []
}
/**======================================================================================= */

/**----------------------object method in JS---------------------- */
//in js object with function called method

//using anonymous function
//1st method
person.sayHello = function () {
  //anonymous function
  console.log("--------using Anonymous Function -   1st method  ---------");
  console.log("Hello Project");
};

person.sayHello(); //object method using anonymous function

/**--------------------------------------------------------------------------- */

//2nd method
function greet() {
  //using function with name
  console.log("--------------2nd method----------\n");
  console.log("hello project");
}

person.sayHellooo = greet;
person.sayHellooo();
/**========================================================================== */

//3rd method
console.log("-----------------3rd method--------------");
let booklet = {
  b1: 2,
  b2: 4,
  saybook: function () {
    console.log("hello book"); //here declare anonymous fun in object directly
  },
};

booklet.saybook();
/**========================================================================= */

//4th method
console.log("-----------------4th method--------------");
let book1 = {
  b1: 2,
  b2: 4,
  saybook1() {
    console.log("hello projewala"); //here declare anonymous fun in object directly
    console.log("the version of book is" + " " + booklet.b2); //access one object of propety into another object
    //booklet.b2 is another property of object which access in book1 object.
  },
};

book1.saybook1();

/**----------------------------------------------------------- */
//this keyword refers to an object. this used when object want to access their own proprety then use this keyword instead of object name eg:person.id instead this.id...

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

/**-------------------------- Math Object in js : [Part-29] -------------------------- */

console.log(Math.PI); //pi value shown using math object
//var x=Math.floor(3.7);
//var x=Math.round(3.7);

var x = Math.ceil(3.7); // ->>4
var x = Math.trunc(3.7); // 3
var x = Math.ceil(3.7); // 3
var x = Math.pow(10, 3); //1000
var x = Math.sqrt(100); // 10
var x = Math.min(3, 45, -5, 7, 554); // -5
var x = Math.max(3, 45, -5, 7, 554); // 554

/**---------------random number generate [part 30]  */

let xx = Math.floor(Math.random() * 10); //showing 0 - 9 random number
//let xx=Math.floor(Math.random()*100);//0-99
console.log(xx);

//get random number using function --> formula available on internet.
function getRandomNumber(max, min) {
  let bx = Math.floor(Math.random() * (max - min) + min);
  return bx;
}

console.log(getRandomNumber(10, 20), "random number is generated here "); //10 11 12 13 14 15 16 17 18 19

/**-------------- Date Object in js [part 31] ------------------------ */

let ax = new Date(); //showing current date

let ax1 = new Date(1998, 06, 65); //

console.log("showing date using date object :", ax1);
/* 
console.log(ax1.getTime());
console.log(ax1.getMonth());
console.log(ax1.getFullYear());
console.log(ax1.getDate());
console.log(ax1.getHours());
console.log(ax1.getSeconds());
console.log(ax1.getDay() ); // showing number as eg:6 as saturday ,0 as sunday, 1 as monday
*/

/* ax1.setTime();
ax1.setMonth();
ax1.setFullYear();
ax1.setDate();
ax1.setHours();
ax1.setSeconds();
ax1.setDay(); */

/* 
//get next year date using following method
ax.setDate(ax.getDate() + 50);
console.log(ax);
 */

//JavaScript Tutorial in Hindi for Beginners [Part 33] - JavaScript Accessors (Getters and Setters)
//refer this video for part 33 [important]

// a constructor function is used to create objects

/* 
const sampleobject = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
} */ //---------->this is object we use

/**------------------------------------------------------------------------------------------ */
//JavaScript Tutorial in Hindi for Beginners [Part 35] - JavaScript Prototypes

//constructor function
function Student(first, last, age) {
  this.f = first;
  this.l = last;
  this.a = age;
}

//creating an object-----------------> this is object using object constructor
var student1 = new Student("Nikhil", "borse", 24); //object 1
var student2 = new Student("goodson", "projecta", 25); //another object 2
//you can create multiple object

/**you can also add function in object  */
/* student1.first=function(){
  return this.first.f+" "+this.l;
} */ //--------------------------------you need to refer video to understand... error

// console.log(student1);
// console.log(student2);
// console.log(student1.name()); //calling function first()

/**----------------- nested object in javascript [part 36] ---------------- */
console.log(
  "-------------------nested object in js--------------------------\n"
);
nestedobject = {
  //main object
  name: "john",
  age: 27,

  personalInfo: {
    //object inside object
    mob: 47492485749,
    address: "project chawk, projetgabad",

    locationInfo: {
      //object inside object
      graphicallocation: "project ",
      manuallocation: "homeproject",
    },
  },
};

console.log(nestedobject);
console.log(nestedobject.personalInfo);
console.log(nestedobject.personalInfo.locationInfo);

/**-JavaScript Tutorial in Hindi for Beginners [Part 29] - Math Object in JavaScript-------Important for interview */
