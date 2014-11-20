/*
* Kimerlee Holcom
* November 20, 2014
* Functions - Industry
 */
//Does the customer's budget fit what they want?

//variable declaration/prompts
var budget = prompt("What is your budget (in dollars)?");
var logo = prompt("Do you need a logo?");
var numberOfPages = prompt("How many pages do you need?");

if(budget === ""){
    budget = prompt("Sorry you didn't enter a budget. Please enter that now.")
}
if(logo === ""){
    logo = prompt("Do you need a logo? (Yes or No)")
}
if(numberOfPages === ""){
    numberOfPages = prompt("Please enter the number of pages you need.");
}

