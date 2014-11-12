/**
 * Kimerlee Holcom
 * November 8, 2014
 * Conditionals Worksheet
 */
//Group 1
//Can a car make it across the desert with the gas they have or should they stop?
alert("This is Group #1");

//declaring given variables
var carMPG;
var gasGaugePercent;
var tankCapacity;

//result variables
var canYouMakeIt

carMPG = prompt("How many miles to the gallon does your car get?");
tankCapacity = prompt("How many gallons of gas does your car hold?");
gasGaugePercent = prompt("What percent is your gas gauge at currently?");

//figure out how many gallons of gas are left in the car
//convert gasGaugePercent to decimal
gasGaugePercent /= 100;
//multiply gasGaugePercent by tankCapacity
var numGallonsLeft = tankCapacity * gasGaugePercent;

//figuring out how many miles are left with the current gas
var milesLeft = carMPG * numGallonsLeft;

//checking the math for each
/*console.log(gasGaugePercent);
console.log(numGallonsLeft);
console.log(milesLeft);*/
//if miles left is greater than 200, "you can make it", otherwise, "You better get gas"
if(milesLeft > 200){
    //if condition is true
    canYouMakeIt = "Yes, you can make it without stopping for gas!";
}else{
    //if condition is false
    canYouMakeIt = "You only have " + numGallonsLeft + " gallons of gas in your tank, better get gas now while you can!";
}
console.log(canYouMakeIt);
alert(canYouMakeIt);

//Group 2
//Grade Letter Check
alert("This is group #2");

//declaring given variables
//grade in percent
var grade;

//result variables
var letterGrade;
//requesting grade percentage from user
grade = prompt("What is the grade percentage you have earned?");

//if grade is <= 100 AND >= 95, A+
if(grade <= 100 && grade >= 95){
    letterGrade = "You have a " + grade + "%, which means you have earned an A+ in the class!";
}else if(grade <95 && grade >= 90){
    letterGrade = "You have a " + grade + "%, which means you have earned an A in the class!";
}else if(grade < 90 && grade >= 85){
    letterGrade = "You have a " + grade + "%, which means you have earned an B+ in the class!";
}else if(grade < 85 && grade >= 80){
    letterGrade = "You have a " + grade + "%, which means you have earned an B in the class!";
}else if(grade < 80 && grade >= 76){
    letterGrade = "You have a " + grade + "%, which means you have earned an C+ in the class!";
}else if(grade < 76 && grade >= 73){
    letterGrade = "You have a " + grade + "%, which means you have earned an C in the class!";
}else if(grade < 73 && grade >= 70){
    letterGrade = "You have a " + grade + "%, which means you have earned an D in the class!";
}else{
    letterGrade = "You have a " + grade + "%, which means you have earned an F in the class!";
}
console.log(letterGrade);
alert(letterGrade);
//Group 3
//Movie Ticket Price
//Determining the movie ticket price by either age or the time of the movie
alert("This is Group #3");

//declaring given variables
var customersAge;
var movieTime;

//result variable
var ticketPrice;

//requesting information from customer
customersAge = prompt ("Please enter your age to determine your ticket price:");
movieTime = prompt("What time is the movie you are seeing? (Please use military time i.e. 3pm = 1500, 3am = 300)");

if(movieTime >= 1500 && movieTime <=1700){
    ticketPrice = "Your ticket will cost $7.00. Enjoy the movie!";
}else{
    if(customersAge >= 55 || customersAge < 10){
        ticketPrice = "Your ticket will cost $7.00. Enjoy the movie!";
    }else{
        ticketPrice = "Your ticket will cost $12.00. Enjoy the movie!";
    }
}
console.log(ticketPrice);
alert(ticketPrice);