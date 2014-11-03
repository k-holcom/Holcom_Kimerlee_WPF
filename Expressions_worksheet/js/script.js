/*
 * Kimerlee Holcom
 * November 1, 2014
 * Expressions Worksheet
 */
//Dog Years Problem.
//declaring given variable
var sparkyAge = 3;
//declaring result variable
var ageInDogYears;
//calculating Sparky's age in dog years.
ageInDogYears = sparkyAge * 7;
//printing to the console
//using concatenating to create the sentence "Sparky is X human years old which is X in dog years."
console.log("Sparky is " + sparkyAge + " human years old which is " + ageInDogYears + " in dog years.");

//Slice of Pie part I
//declaring given variables
var slicesPerPizza = 9;
var numOfPeople = 7;
var numOfPizzas = 5;
//Declaring result variable
var slicesPerPerson;
//Calculating how many slices each person gets
slicesPerPerson = (numOfPizzas * slicesPerPizza)/numOfPeople;
//printing to console
//using concatenating to create the sentence "Each person ate X slices of pizza at the party."
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//Slice of Pie Part II
//using old variables of slicesPerPizza, numOfPeople, numOfPizzas
//Declaring a new result variable. This variable is for number of slices Sparky gets.
var slicesForSparky;
//calculating how many slices Sparky gets by using the modulo operator
slicesForSparky = (numOfPizzas * slicesPerPizza) % numOfPeople;
//printing "Sparky got X slices of pizza." by using concatenating.
console.log("Sparky got " + slicesForSparky + " slices of pizza.");