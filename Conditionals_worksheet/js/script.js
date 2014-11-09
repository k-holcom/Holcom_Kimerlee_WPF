/**
 * Kimerlee Holcom
 * November 8, 2014
 * Conditionals Worksheet
 */
//Group 1
//Can a car make it across the desert with the gas they have or should they stop?

//declaring given variables
var carMPG;
var gasGaugePercent;
var tankCapacity;

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
    console.log("Yes, you can make it without stopping for gas!");
}else{
    //if condition is false
    console.log("You only have " + numGallonsLeft + " gallons of gas in your tank, better get gas now while you can!")
}

//Group 2
//Grade Letter Check

//declaring given variables
//grade in percent
var grade;

//requesting grade percentage from user
grade = prompt("What is the grade percentage you have earned?");

//if grade is <= 100 AND >= 95, A+
if(grade <= 100 && grade >= 95){
    console.log("You have a " + grade + "%, which means you have earned an A+ in the class!");
}else if(grade <95 && grade >= 90){
    console.log("You have a " + grade + "%, which means you have earned an A in the class!");
}else if(grade < 90 && grade >= 85){
    console.log("You have a " + grade + "%, which means you have earned an B+ in the class!");
}else if(grade < 85 && grade >= 80){
    console.log("You have a " + grade + "%, which means you have earned an B in the class!");
}else if(grade < 80 && grade >= 76){
    console.log("You have a " + grade + "%, which means you have earned an C+ in the class!");
}else if(grade < 76 && grade >= 73){
    console.log("You have a " + grade + "%, which means you have earned an C in the class!");
}else if(grade < 73 && grade >= 70){
    console.log("You have a " + grade + "%, which means you have earned an D in the class!");
}else{
    console.log("You have a " + grade + "%, which means you have earned an F in the class!");
}