/**
 * Kimerlee Holcom
 * November 3, 2014
 * Expressions - Industry
 */

// Calculating the total number of pixels in a percentage of a workspace when given the customary (US) measurements

// Adding an extra variable that is not needed but adding for extra format
var name = prompt("What is your name?");
alert("Hello " + name + ".")
//declaring the variables needed
//the variables needed are height, width, pixels for each, and percentage that the user wants to know the number of pixels of.
var height;
var width;
var percent;

//adding in prompts here.
height = prompt("Please enter in the height of the work space you are using in inches: (i.e. 9.75)");
//checking to see if the height was stored correctly
//console.log(height); //works correctly
width = prompt("Please endter the width of the work space you are using in inches: (i.e. 14.125)");
//checking to see if the width was stored correctly
//console.log(width); // works correctly
percent = prompt("What percentage of the work space are you interested in knowing the number of pixels:");
// checking the prompt to see if it stored value correctly.
//console.log(percent); //works correctly

//this variable will be used to calculate the variables height into pixels and width into pixels
var standardDPI = 72; // This is the standard for web that is able to be used by mac and windows computers.

//this calculation will be used to help calculate the pixels in the final calculation. This expression will take the percentage and turn it into a decimal so it can be used in a calculation.
percent /= 100;

//to calculate the height in pixels you must multiply the height by standardDPI
height *= standardDPI;

//calculate the width in pixels by multiplying it by standardDPI
width *= standardDPI;

//checking to see if the height and width are calculating correctly
//console.log(width);//works correctly
//console.log(height);//works correctly

//calculating the area of the whole work space
//must define the result variable
var totalArea = height * width;
//checking the calculations of totalArea
//console.log(totalArea); //works correctly

//another result variable is for the area in question
var areaOfPercentage = totalArea * percent;
//checking the calculations to see if they are correct
//console.log(areaOfPercentage); //works correctly
//in order to put the correct percentage format in, must multiply the current percent variable by 100
percent *= 100;
//adding alert to let the user know the answer.
alert("The number of pixels in " + percent + "% of your work space is " + areaOfPercentage + " pixels.");
console.log("The number of pixels in " + percent + "% of your work space is " + areaOfPercentage + " pixels.");