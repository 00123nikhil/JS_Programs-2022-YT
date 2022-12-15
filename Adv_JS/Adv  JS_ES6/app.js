//import and export here

// import { book3 } from "./Modules/100linefunction.js";
import { withdraw } from "./Modules/account.js";
import { deposit } from "./Modules/account.js";
import { name } from "./Modules/user.js";

withdraw();
// deposit();

// console.log(name);

/* you can import two function at same line or you can change the name too */
// import { code as bodi, mycode } from "./Modules/user.js";

// bodi();
// mycode();

/* if you have 100lines function in another file the you should do this */
import * as linefunction from "./Modules/100linefunction.js";

linefunction.book3();
//--------------------------------------------------------------------------------------

//called default function
/* when you calling default function that no name, give the name when importing */
import { default as fal } from "./Modules/100linefunction.js";

fal(); //default function is called

//json -------------------------------------------------------------

//creating and accessing json file
let data = `"name": "Nikhil",
"age": 25,
"is_student": true,
"password": null,
"p_lang": ["c", "GCP", "AWS", "JS", "React", "ajax"],
"address": {
  "city": "Pune",
  "pincode": 3432334,
  "state": "maharashtra"
}`;

let dObject = JSON.parse(data); //converted string into js object
//accessing object
console.log(dObject["name"]); // o/p-- Nikhil
//to access array value
console.log(dObject["p_lang"][1]); // GCP
//to access object value
console.log(dObject["address"]["city"]); //pune
