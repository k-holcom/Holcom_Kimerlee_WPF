/**
 * Kimerlee Holcom
 * November 12, 2014
 * Conditionals - Industry Assignment
 */
//determining if a website will need an e-commerce aspect to it
//declaring the variable
var businessOrPersonal;
var sellingMerchandise;

//asking User for the information needed
businessOrPersonal = prompt("What kind of website are you looking to create (business or personal)? ");
sellingMerchandise = prompt("Are you going to be selling merchandise (yes or no)?");


//validation
//if empty i.e. "" ask for prompt again
if(businessOrPersonal === ""){
    businessOrPersonal = prompt("Sorry, you left this blank, please enter if you want a personal or business website.");
}
if(sellingMerchandise === ""){
    sellingMerchandise = prompt("Sorry, you left this blank, please enter whether you are selling merchandise (yes or no).");
}