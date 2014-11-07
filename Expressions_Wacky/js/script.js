/**
 * Kimerlee Holcom
 * November 3, 2014
 * Expressions - Wacky
 */

//calculate the number of note cards it would take to cover a wall and to cover the perimeter of the wall

var measurements = [];
//defining array elements
measurements[0] = prompt("What is the width of your wall in feet?");
measurements[1] = prompt("What is the height of your wall in feet?");
measurements[2] = prompt("What is the width of your note card in inches?");
measurements[3] = prompt("What is the height of your note card in inches?");

//testing to see if the values go into the array
//console.log(measurements);//works correctly

//must convert to same measurements to make it easy to do the mathematics multiplying the first two elements by 12(inches)
measurements[0] = measurements[0] * 12;
measurements[1] = measurements[1] * 12;
//testing conversions
//console.log(measurements); //correct

//calculating the perimeter
var perimeter;
perimeter = measurements[0] + measurements[0] + measurements[1] + measurements[1];
//testing perimeter
//console.log(perimeter);//correct

//calculating area of wall
var area;
area = measurements[0] * measurements[1];
//testing area calculations
//console.log(area);//works

//figuring out how many cards can be used to cover one row of the height of the wall
var numCardsHeight = measurements[1] / measurements[3];
//testing to see if calculation works
//console.log(numCardsHeight);//works

//figuring out how many cards to go across the width
var numCardsWidth = measurements[0] / measurements[2];
//testing calculation
//console.log(numCardsWidth);//works

//add numCardsWidth and numCardsHeight and mulitply by 2 to get numCardsPerimeter
var numCardsPerimeter = 2 * numCardsHeight + 2 * numCardsWidth
//tested numCardsPerimeter
console.log(numCardsPerimeter);