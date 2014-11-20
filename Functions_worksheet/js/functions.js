/**
 * Kimerlee Holcom
 * November 20, 2014
 * Functions Worksheet
 */

//Circumference

//declaring variable and getting info from user
var rad = prompt("What is the radius of the circle?");

//declaring the function
var circumference  = function(radius){
    // calculating cirucmference
    var circumference = (2 * radius) * 3.14;

    //returning the circumference.
    return circumference;
}
