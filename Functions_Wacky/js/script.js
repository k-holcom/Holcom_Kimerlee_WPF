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
        daysInMonth = prompt("You either forgot to enter something, or entered and invalid number. Please enter a number between 28 and 31.")
    }
    if(dayOfTheMonth === "" || dayOfTheMonth < 1 || dayOfTheMonth > 31){
        daysInMonth = prompt(prompt("You either forgot to enter something, or entered and invalid number. Please enter a number between 1 and 31."))
    }
}