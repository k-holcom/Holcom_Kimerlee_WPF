/**
 * Kimerlee Holcom
 * November 3, 2014
 * Expressions - Personal
 */
//Using this to project to determine how many cups of coffee a person drinks in one year and then X number of years into the future if trend continues.

//declaring the variables that are needed for the calculation.
var cupsPerDay;
var daysPerWeekCoffeeDrank;
var yearsIntoFuture;

//declaring non-needed variables
var name;
var result = "If you drink " + cupsPerDay + " per day, you will drink " + cupsPerYear + ".";
var result2 = "If you continue to drink this many per day, you will drink " + futureNumOfCups + " in the next " + yearsIntoFuture;

//declaring the result variables
var cupsPerYear;
var futureNumOfCups;

//prompt for user's name
name = prompt("What is your name?");
//checking to see if the user's name has been stored correctly
//console.log(name);//Works correctly

//prompt asking for the number of cups a person drinks per day
cupsPerDay = prompt("Hello " + name + "! How many cups of coffee do you drink per day?");
//checking to see if prompt comes out ok and if value stored correctly
//console.log(cupsPerDay); //Works correctly

//prompt asking for how many days a week the user drinks coffee.
daysPerWeekCoffeeDrank = prompt(name + ", how many days a week do you usually drink coffee? (0-7)");
//testing to see if the variable was stored properly
//console.log(daysPerWeekCoffeeDrank);//works correctly

//creating the calculation expressions
var cupsPerWeek = cupsPerDay * daysPerWeekCoffeeDrank;
//testing to see if calculations work right.
//console.log(cupsPerWeek);//calculations come out correctly

//calculating per year
cupsPerYear = cupsPerWeek * 52;
//testing the result variable cupsPerYear
//console.log(cupsPerYear); //works correctly

alert(name + ", if you drink " + cupsPerDay + " cups per day, for " + daysPerWeekCoffeeDrank + " days each week, you will drink " + cupsPerYear + " cups of coffee a year.");

//creating a prompt for the number of years into the future user would like to know.
yearsIntoFuture = prompt("Enter a number of how many years into the future you would like to use to calculate how many cups you will drink:");
//testing to see if value stored correctly
//console.log(yearsIntoFuture);//works correctly