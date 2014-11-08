//conditional logic
var gpa = 48;

//if the gpa is over the min 2.0 score, the student can graduate
/*
if(gpa > 2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!");
}
*/

//(gpa > 2.0) ? console.log("You can graduate!"): console.log("GPA is too low!");

var age = 6;
var book;

//if the age of the child is under, they get Green Eggs and Ham, otherwise they get The Time Machine
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";

console.log(book);