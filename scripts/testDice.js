var dice1; //1st Dice Value
var dice2; //2nd Dice Value
var problem; 

var getAnswer;
var userAnswer;
var readableOperation;
var stringedAnswer;

var wrongAnswer = "Sorry, your answer was wrong.";
var rightAnswer = "Congrats, your answer was right!";
var questionText = "What is" + dice1 + getReadableOperation(problem) + dice2 + "?";


//SETUP




function getReadableOperation (problem) {
if (problem == 1) {
    return "+";
 } else if (problem == 2) {
    return "-";
 } else if (problem == 3) {
    return "*";
 } else if (problem == 4) {
    return "/";
 } else {
    console.log("ERROR: INVALID PROBLEM (getReadableOperation)");
 }
}

function getProblem(){
  return problem;  
}


function getAnswer(dice1, dice2, problem) {
         if (problem == 1) { return dice1 + dice2; }
    else if (problem == 2) { return dice1 - dice2; }
    else if (problem == 3) { return dice1 * dice2; }
    else if (problem == 4) { return dice1 / dice2; }
    else                   { return 0; }
}



function setProblem() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  problem = Math.floor(Math.random() * 3) + 1;
  return 0;
}


function getQuestionText() {
    var questionText = "What is" + dice1 + getReadableOperation(problem) + dice2 + "?";
    return questionText;
}


function confirmAnswer() {
    stringedAnswer = getAnswer(dice1, dice2, problem).toString();
    if (userAnswer == stringedAnswer) {
        console.log("ANSWER: CORRECT");
        return 1;
    } else {
        console.log("ANSWER: WRONG")
        return 0;
    }
}
 
function confirmGenProblem() {
    userAnswer = document.getElementById("htmlAnswer").value;
 if (confirmAnswer()) {
     setProblem();
     alert(rightAnswer);
     document.getElementById("htmlQuestion").innerHTML = "What is" + dice1 + getReadableOperation(problem) + dice2 + "?";
     return 1;
 } else {
     alert(wrongAnswer);
     return 0;
 }
   

}
 



function askProblem() {
    getQuestionText();
    userAnswer = prompt("What is" + dice1 + getReadableOperation(problem) + dice2 + "?");
    if (confirmAnswer()) {
        alert(rightAnswer);
        return 1;
    } else {
        alert(wrongAnswer);
        return 0;
    }
}    


function alertProblem() {
  setProblem();
  askProblem();
}


//SETUP FOR HTML
setProblem();
document.getElementById("htmlQuestion").innerHTML = "What is" + dice1 + " " + getReadableOperation(problem) + dice2 + "?";


