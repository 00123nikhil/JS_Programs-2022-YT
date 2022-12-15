//Map function
let arr = [1, 3, 4, 5, 6, 7];

//creating map function instead using for loop
let mapfun = arr.map(
  /* anonymous function */ function (val) {
    return val * 3;
  }
);
//using arrow function
let mapfun1 = arr.map((val) => val * 3);

console.log(mapfun);
// ---------------------------------------------------------------------------------
console.log("-------------- Filter Function-------------");

let arr1 = [1, 3, 55, 6, 777, 8, , 54, 65];
//creating arrow function using filter
let filterfun = arr1.filter((val) => val > 10);
//using anonymous function
/* let filterfun= arr1.filter(function (val){
    return val>10;
}); */
console.log(filterfun);

//creating array with inside object for filter
let Team = [
  {
    Name: "Nikhil",
    Position: "Developer",
  },
  {
    Name: "Adam",
    Position: "Devops",
  },
  {
    Name: "Peter",
    Position: "Web developer",
  },
  {
    Name: "Will",
    Position: "Developer",
  },
];

let developer = Team.filter((val) => val.Position == "Developer");
console.log(developer);

// ------------------------------------------------------------------------------------
console.log("------------- Web Storage --------------");

//session storage and local storage
localStorage.setItem("Name", "Nikhil");
localStorage.setItem("Location", "London");

console.log(localStorage.getItem("Location"));
//to remove
// localStorage.removeItem('Location');

//session storage
sessionStorage.setItem("book", "deep work");

console.log(sessionStorage.getItem("book"));
// -----------------------------------------------------------------------------------------

//Json in javascript
// 1.In JSON use double quatation always.