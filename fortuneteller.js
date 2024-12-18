//this code must run on the browser

let motherName = prompt(" please enter your mother name: ");
let streetName = prompt(" please enter the name of the street you grew up: ");
let favouriteColor = prompt(" please enter your favourite color as a child: ");
let currentAge = prompt(" please enter your your age: ");
let number = prompt(" please enter a number 1 to 10: ");
let NumberNumeric = Number(number);
let rest = (currentAge%number);
console.log("In" + "  " + NumberNumeric + " years you will meet your best friend named " +  motherName + " "+ " " + streetName );
let marriedYears = (currentAge/number);
marriedYears = (Math.round(marriedYears));
console.log("you will  get married in" + " " + marriedYears + "  years "  + " " + " and have "  + rest + " " + " children " );
let hairDye = (currentAge-number);
console.log("In " + " " + hairDye + " "+ "years " +  " " + " your hair will dye ");
alert("In" + "  " + NumberNumeric + " years you will meet your best friend named " +  motherName + " "+ " " + streetName );
marriedYears = (Math.round(marriedYears));
alert("you will  get married in" + " " + marriedYears + "  years "  + " " + " and have "  + rest + " " + " children " );
alert("In " + " " + hairDye + " "+ "years " +  " " + " your hair will dye ");

