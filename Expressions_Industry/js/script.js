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


//this variable will be used to calculate the variables height into pixels and width into pixels
var standardDPI = 72; // This is the standard for web that is able to be used by mac and windows computers.

//this calculation will be used to help calculate the pixels in the final calculation. This expression will take the percentage and turn it into a decimal so it can be used in a calculation.
percent /= 100;

//to calculate the height in pixels you must multiply the height by standardDPI
height *= standardDPI;

//calculate the width in pixels by multiplying it by standardDPI
width *= standardDPI;

//checking to see if the height and width are calculating correctly
//console.log(width);
//console.log(height);
