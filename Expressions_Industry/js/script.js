/**
 * Kimerlee Holcom
 * November 3, 2014
 * Expressions - Industry
 */

//Calculating the total numbers of pixels that a certain percentage is of a web page
//declaring variables
var height;
var width;
var standardDPI = 72;
var percent;

//prompting the user for the required information.
height = prompt("What is the height of your web space (in inches)?");
//checking to see if height was captured.
//console.log(height);
//declaring height in pixels
var pixelsHeight = height * standardDPI;

//asking for width
width = prompt("What is the width of your web space (in inches)?");
//checking to see if the width was captured
//console.log(width);
//declaring/defining width in pixels;
var pixelsWidth = width * standardDPI;
//declaring/defining area in pixels
var areaPixels = pixelsHeight * pixelsWidth;

//asking for the percentage they want to know.
percent = prompt("What percentage of the screen do you want to know the area of?");
//checking to see if percent was captured
//console.log(percent);