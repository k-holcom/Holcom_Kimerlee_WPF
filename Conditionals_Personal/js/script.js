/**
 * Kimerlee Holcom
 * November 12, 2014
 * Conditionals_Personal Assignment
 */
//figuring out the time in military time

//given variables
var time = prompt("What time is it? Please enter it as a number between 1 and 12 (i.e if it is 3 pm, enter 3)");
var amPM = prompt("Is it AM or is it PM?");

//validation
if(time === "" || time > 12 || time < 1){
    time = prompt("Sorry, you forgot to enter a value, or your value was invalid. Please enter the time as a number between 1 and 12");
}

if(amPM === ""){
    amPM = prompt("Sorry, you did not enter a valid value. Please enter if it is AM or PM");
}

//time = time - 12;
//console.log(time);
if(amPM === "AM") {
    if (time == 12) {
        time = time - 12;
        //console.log(time);
        console.log("It is 0" + time + "00 in military time.");
        alert("It is 0" + time + "00 in military time.");
    }
}