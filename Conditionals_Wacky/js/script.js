/**
 * Kimerlee Holcom
 * November 13, 2014
 * Conditionals - Wacky Assignments
 */
// Are there enough people to play teams in a game
//declaring variables
var numOfPeople;
var numOnEachTeam;

//prompting user for information
numOfPeople = prompt("How many people are there in all?");
numOnEachTeam = prompt("How many people are needed for each team?");

//validation
//if numOfPeople is empty or is less than one, then asked to re-enter value
if(numOfPeople === "" || numOfPeople < 1){
    numOfPeople = prompt("Sorry, you either entered no answer or an answer less than 1. Please enter a valid number:");
}
//if numOnEachTeam is empty or is less than one, then asked to re-enter value.
if(numOnEachTeam === "" || numOnEachTeam < 1){
    numOnEachTeam = prompt("Sorry, you either entered no answer or an answer less than 1. Please enter a valid number:");
}


//result variable
var numOfTeams =(numOfPeople / numOnEachTeam);
var numOfPeopleLeft = numOfPeople % numOfPeopleLeft;


//if there are 0 or 1 team(s) then there are not enough people to play as teams
if(numOfTeams.toFixed(0) == 0 || numOfTeams.toFixed(0) == 1){
    console.log("There are not enough people to play as teams. Find another game.");
    alert("There are not enough people to play as teams. Find another game.");

}