/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// We will use function name (){}, prompt() and alert()

function gradeCalculator(){
let marks= prompt("Please enter your Marks to know your result:");

if(marks >= 90 && marks <= 100){
    alert("Your secured Grade A");
}else if(marks >= 80 && marks <= 89){
    alert("Your secured Grade B");
}else if(marks >= 70 && marks <= 79){
    alert("Your secured Grade C");
}else if(marks >= 60 && marks <= 69){
    alert("Your secured Grade D");
}
else if(marks >= 0 && marks <= 59){
    alert("Sorry you got Grade F. Better luck next time");
}
else{
    alert("Please input valid marks for your result");
}
}

gradeCalculator();