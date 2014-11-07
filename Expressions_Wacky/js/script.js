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
measurements[2] = prompt("What is the width of your note card?");
measurements[3] = prompt("What is the height of your note card?");

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

