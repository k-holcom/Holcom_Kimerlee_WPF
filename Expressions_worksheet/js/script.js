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

//Average Shopping Bill
//declaring the given variables
var groceryBills = [80.67, 92.12, 66.95, 75.05, 103.99];
//result variables declared
var totalSpent;
var avgWeeklyBill;
//calculating the total amount
totalSpent = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4];
/* used this line to double check to see if the total came out right had to use the totalSpent.toFixed(2) to keep the
decimals to 2 places
console.log(totalSpent.toFixed(2));
*/
//calculating the weekly average
avgWeeklyBill = totalSpent / 5;
/*used this line again to double check to see if the total came out right and once again had to use the avgWeeklyBill
to keep the decimal places to 2.
console.log(avgWeeklyBill.toFixed(2));
*/
//printing "You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week." to the console.
console.log("You have spent a total of $" + totalSpent.toFixed(2) + " on groceries over 5 weeks. That is an average of $" + avgWeeklyBill.toFixed(2) + " per week.");
