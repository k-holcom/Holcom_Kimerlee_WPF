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
