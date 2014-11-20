/*
* Kimerlee Holcom
* November 20, 2014
* Functions - Personal
 */

//calculating whether someone needs to buy a 10 lb bird or something bigger.

var numOfGuests = prompt("How many guests are you expecting for thanksgiving?");
var howManyEatLeftovers = prompt("How many of your guests will eat leftovers?");

//validating using a while loop
while(numOfGuests === "" || howManyEatLeftovers ===""){
    if(numOfGuests ===""){
        numOfGuests = prompt("Please enter how many guests you are planning on.");
    }
    if(howManyEatLeftovers === ""){
        howManyEatLeftovers = prompt("Please enter how many of your guests will probably have leftovers.");
    }
}
//creating function.
function turkey(guests, leftovers){
    //variables... one pound of turkey per guest for dinner and 1/2 pound per person eating leftovers.
    var turkeyForDinner =  guests;
    var turkeyLeftovers = leftovers * .5;
    var totalTurkey = parseInt(turkeyForDinner) + turkeyLeftovers;

    //returning totalTurkey
    return totalTurkey;
}
//result variable
var turkeyInPounds = turkey(numOfGuests, howManyEatLeftovers);

//printing to alert and to console using ternary statement
var result =  (turkeyInPounds <= 10) ? "A 10 lb turkey will be fine. You only require a minimum of " + turkeyInPounds + " pounds of turkey" : "You need a turkey of at least " + turkeyInPounds + " pounds.";

console.log(result);
alert(result);