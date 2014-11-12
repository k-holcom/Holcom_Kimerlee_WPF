/**
 * Kimerlee Holcom
 * November 12, 2014
 * Conditionals_Personal Assignment
 */
//determining what time dinner is.

//declaring given variables
var hoursWorked;
var startTime;
var dinnerPrep;

//collecting information
startTime = prompt("In military time (i.e 600 for 6am, or 1500 for 3pm), what time do you start work?");
hoursWorked = prompt("How many hours do you work a day?");
dinnerPrep = prompt("How long, in minutes, does it take to cook dinner?");

// if startTime, hoursWorked, or dinnerPrep are empty, "You forgot something. Please enter a value.
if(startTime == ""){
    startTime = prompt("Sorry, you forgot to enter your start time. Please enter it in military time.");
}else if(hoursWorked == ""){
    hoursWorked = prompt("Sorry, you forgot to enter the number of hours you work a day. Please enter a value.");
}else if(dinnerPrep == ""){
    dinnerPrep = prompt("Sorry, you forgot to enter how long it takes to get dinner ready. Please enter a value in minutes.");
}else{
    console.log("validation is working.")
}