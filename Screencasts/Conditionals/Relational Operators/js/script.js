//conditional logic

var kidHeight = 46;
var minHeight = 48;
var wParentHeight = 45; //height of kid with the parent

//if the child is old enough, print to the console, "you can ride!"
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //code performed if condition is false
    console.log("You can ride, only if a parent is present")
}else{
    console.log("Sorry kid, you got some growin' to do!");
}