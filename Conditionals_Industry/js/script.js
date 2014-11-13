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

//if the user has a business site and is selling merchandise, they need an e-commerce aspect to their website
if(businessOrPersonal === "business"){
    if(sellingMerchandise === "yes"){
        console.log("You need to have an e-commerce aspect to your website.");
        alert("You need to have an e-commerce aspect to your website.");
    //if they are not selling merchandise, they do not need an e-commerce aspect
    }else{
        console.log("You do not need to have an e-commerce aspect to your website.");
        alert("You do not need to have an e-commerce aspect to your website.");
    }
}else if(businessOrPersonal === "personal"){
    if(sellingMerchandise === "yes") {
        console.log("You do not need to purchase an e-commerce aspect to your website, PayPal should work just fine.");
        alert("You do not need to purchase an e-commerce aspect to your website, PayPal should work just fine.");
    }else{
        console.log("You do not need to have an e-commerce aspect to your website.");
        alert("You do not need to have an e-commerce aspect to your website.");
    }
}