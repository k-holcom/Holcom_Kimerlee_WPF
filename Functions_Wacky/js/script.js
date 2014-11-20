/*
* Kimerlee Holcom
* November 20, 2014
* Functions - Wacky
 */

//how many minutes are in a month and how many are left in the month.
//declaring variables

var daysInMonth = prompt("How many days are in the current month?");
var dayOfTheMonth = prompt("What is the current day of the month (i.e. 15, 30, etc)?");

while( daysInMonth === "" || daysInMonth < 28 || daysInMonth > 31 || dayOfTheMonth === "" || dayOfTheMonth < 1 || dayOfTheMonth > 31){
    if(daysInMonth === "" || daysInMonth < 28 || daysInMonth > 31){
        daysInMonth = prompt("You either forgot to enter something, or entered and invalid number. Please enter a number between 28 and 31.");
    }
    if(dayOfTheMonth === "" || dayOfTheMonth < 1 || dayOfTheMonth > 31){
        dayOfTheMonth = prompt("You either forgot to enter something, or entered and invalid number. Please enter a number between 1 and 31.");
    }
}

//creating anonymous function
var calcMin = function(days){
    //calculate the number of minutes in the entire month
    var entireMonth = 60 * (24 * days);

    //returning minutes for entire month
    return entireMonth;
}

function minLeft(days, date){
    //calculating number of days remaining and the number of minutes left.
    var minLeft = ((days - date) * 24) * 60;

    //returning minutes left in the month
    return minLeft;
}

//result variables
var month = calcMin(daysInMonth);
var minsLeft = minLeft(daysInMonth, dayOfTheMonth);

console.log("There are " + month + " total minutes in the current month, and there are " + minsLeft + " minutes left in the month.")
alert("There are " + month + " total minutes in the current month, and there are " + minsLeft + " minutes left in the month.");