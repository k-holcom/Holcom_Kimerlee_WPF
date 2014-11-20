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

//creating a variable to hold the
var c = circumference(rad);

//printing the result
console.log(c);

//Stung!
//declaring variable and getting user information
var weight = prompt("What is the victim's weight (in pounds)?");

//defining the function
function stung(weight){
    //calculating number of stings
    var numOfStings = weight * 8.666666667;

}
