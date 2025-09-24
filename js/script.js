// Step 1: Convert the following highlighted identifiers to Camel Case notation
/*
let someMonth;
function theMonth();
let currentMonth;
let summerMonth;
let MyLibraryFunction;
*/

// Step 2: Examples of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression
/*
10                          // numeric literal
'Happy Birthday'            // string literal 
true                        // boolean literal 
null                        // null literal
*/

// Step 3: Two examples of complex / variable expressions
/*
temperature = 68
fullName = "Bill" + " "  + "Liu"
*/

// Step 4: Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers
/*
let strFirstName, strLastName, strAddress, strCity, strState, nZipCode, intYourAge, strReferralSource, bMayWeContactYou;
*/

// Step 5: Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables
/*
let strFirstName = "Bill";

let strLastName;
strLastName = "Liu";

intYourAge = 50;
*/

// Step 6: Create a variable. Add a number and a string and display the coerced result in the browser’s console window.
/*
let numPlusStr = 5 + "San Diego";
document.write(numPlusStr);
*/

// Step 7: Create two variables.
/*
    For the first variable, add a Boolean and a string and display the coerced result.
    For the second variable, add a number and a Boolean and display the coerced result.
*/
/*
let bPlusStr = false + "World";
document.write("bPlusStr equals " + bPlusStr + "<br>");
//document.write("\n");
let numPlusBoolean = 2025 + true;
document.write("numPlusBoolean equals " + numPlusBoolean + "<br>");
*/

// Step 8: Is the following string literal valid? If not, how would you fix it?
// String Escape Sequences
/*
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);
*/

// Step 9: Create a variable that produces a null value in the console window. Then, create a variable that produces an undefined value in the console window.
let nullVariable = null;
console.log("Null variable:", nullVariable);

let undefinedVariable; 
console.log("Undefined variable:", undefinedVariable);

// Step 10: Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
/*
// string
console.log(typeof "Hello World!");

// number
console.log(typeof 12345);

// boolean
console.log(typeof true);

// object  
console.log(typeof {});
console.log(typeof null);  

// undefined
console.log(typeof undefined);
*/

// Step 11: Within an alert box, use the concatenation operator (+) to display text in the alert box
alert("Hello Zak Ruvalcaba" + "," + " " + "welcome to the JavaScript class!");

