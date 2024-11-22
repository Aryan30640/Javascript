let marks = prompt("Enter your marks:")
let grade;
if(marks <= 100 && marks >= 80) {
    grade = "A";
} else if(marks >= 60 && marks <= 79) {
    grade = "B";
} else if(marks >= 50 && marks <= 59){
    grade = "C";
} else if(marks >=33  && marks <= 49) {
    grade = "D";
} else if(marks >= 0 && marks <= 32) {
    grade = "F";
}
console.log(grade);