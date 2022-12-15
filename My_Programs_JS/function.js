//JavaScript Tutorial in Hindi for Beginners [Part 20] - The arguments object in JavaScript

/* function add(n1, n2) {
  document.write(n1 + n2);
  console.log(n1 + n2);
}

add(3, 4);
add(3, 4, 5);

function add() {
    console.log(arguments);
}
add(2, 3); */

function addfun() {
  if (arguments.length == 0) {
    console.log("NO argument passed");
  } else {
    let sum = 0; //5+7 -->12
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    console.log(sum);
  }
}
addfun(5, 7);
/**------------------------------------------------------- */
//JavaScript Tutorial in Hindi for Beginners [Part 21] - Returning a value in JavaScript

function arrfun() {
  let a = [1, 2, 3, 4];
  return a; //return return whatever you write after return
  //return 0;//after return is executed function is closed.
}
let arrfunkaro = arrfun(2, 3);
console.log("it will show array instead of arryfun", arrfunkaro);

/**---------------------------------------------------------------------------- */

//JavaScript Tutorial in Hindi for Beginners [Part 22] - Global variable vs Local variable

let Globalvariable = 200; //global variable ->> acccess every where in web page

function gum() {
  let a = 100; //local variable
  console.log(a);
}

function sum() {
  let a = 100; //local variable-->only accessible in function
  console.log("local varviable is deleted after end of program ", a);
  console.log("global variable is accesible \n", Globalvariable);
}

gum();
sum();
/**--------------------------------------------------------- */

//JavaScript Tutorial in Hindi for Beginners [Part 23] - Anonymous Functions in JavaScript

/* function(){
    console.log("its a function without name called as anonymous function and showing error");
} */

//anonymous function
let anonymousfun = function () {
  console.log(
    "its a anonymous function but assign to variable, its exceptable."
  );
};

anonymousfun();
//watch video for more details anonymous function related..................

//immediately invoked function
(function () {
  console.log("hey, you are going there");
})(); // its anonymous function without name and immediately invoked by this way.
