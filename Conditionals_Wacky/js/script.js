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
var numOfPeopleLeft = numOfPeople % numOnEachTeam;


//if there are 0 or 1 team(s) then there are not enough people to play as teams. Using Math.floor() function to round down decimal.
if(Math.floor(numOfTeams) == 0 || Math.floor(numOfTeams) == 1){
    console.log("There are not enough people to play as teams. Find another game.");
    alert("There are not enough people to play as teams. Find another game.");
//if there are more than 2 teams, then must decide if there are any people left over after dividing teams evenly
}else {
    //If there are any people left over, then list number of teams and number of people without a team.
    if (numOfPeopleLeft >= 1) {
        console.log("There are enough people to play as " + Math.floor(numOfTeams) + " teams but there are " + numOfPeopleLeft + " person/people without a team.");
        alert("There are enough people to play as " + Math.floor(numOfTeams) + " teams but there are " + numOfPeopleLeft + " person/people without a team.");
    //if there are no people left over the teams are even.
    } else {
        console.log("There are enough people to play as " + Math.floor(numOfTeams) + " teams.");
        alert("There are enough people to play as " + Math.floor(numOfTeams) + " teams.");
    }
}