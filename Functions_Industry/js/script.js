/*
* Kimerlee Holcom
* November 20, 2014
* Functions - Industry
 */
//Does the customer's budget fit what they want?

//variable declaration/prompts
var budget = prompt("What is your budget (in dollars)?");
var logo = prompt("Do you need a logo made?");
var numberOfPages = prompt("How many pages do you need?");

// /validation
//used while loop to keep checking to see if variables are empty. Once they are not empty, the loop will end.
while(budget === "" || logo === "" || numberOfPages === "") {
    if (budget === "") {
        budget = prompt("Sorry you didn't enter a budget. Please enter that now.")
    }
    if (logo === "") {
        logo = prompt("Do you need a logo? (Yes or No)")
    }
    if (numberOfPages === "") {
        numberOfPages = prompt("Please enter the number of pages you need.");
    }
}

//function
function calcBudget(budget, logo, numOfPages){


    //variable for the total of the project, and total cost of pages.
    var total = 0;
    var totalCostOfPages = 0;
    //if logo is needed, then add $50 to the total.
    if(logo === "yes"){
        total += 50;
    }
    //if the number of pages is between 1 and 10 charged full price then total cost of the pages is added to total.
    if(numOfPages > 0 && numOfPages < 10){
        totalCostOfPages = numOfPages * 100
        total += totalCostOfPages;
    //if  the number of pages is greater then 10, then a discount of 20% is given then added to the total.
    }else if(numOfPages > 10){
        totalCostOfPages = .8 * (numOfPages * 100);
        total += totalCostOfPages;
    }
    return total;
}
//result variable used for final calculation.
var totalCostOfProject = calcBudget(budget, logo, numberOfPages);

//to see if the requirements fit the budget, must take the total of the project away from the budget. if there is more than or equal to $0 it fits the budget if it is less than 0, then it does not fit the budget.
var whatsLeft = budget - totalCostOfProject;
if(whatsLeft >= 0){
    console.log("With the information given, your project would fit into your budget. You would have $" + whatsLeft + " left.");
    alert("With the information given, your project would fit into your budget. You would have $" + whatsLeft + " left.");
}else{
    whatsLeft = 0 - whatsLeft;
    console.log("You were over your budget by $" + whatsLeft+ ".");
    alert("You were over your budget by $" + whatsLeft+ ".");
}