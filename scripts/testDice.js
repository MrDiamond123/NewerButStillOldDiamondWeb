var dice1; //1st Dice Value
var dice2; //2nd Dice Value
var problem; 

var getAnswer;
var userAnswer;
var readableOperation;
var stringedAnswer;

var wrongAnswer = "Sorry, your answer was wrong.";
var rightAnswer = "Congrats, your answer was right!";
var questionText = " ";

var input = document.getElementById("htmlAnswer");
var answerThing = document.getElementById("answerThing");

//SETUP


function getReadableOperation (problem) {
if (problem == 1) {
    return " + ";
 } else if (problem == 2) {
    return " - ";
 } else if (problem == 3) {
    return " * ";
 } else if (problem == 4) {
    return " / ";
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
  questionText = "What is " + dice1 + getReadableOperation(problem) + dice2 + "?";
  return 0;
}


function getQuestionText() {
    var questionText = "What is " + dice1 + getReadableOperation(problem) + dice2 + "?";
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
 
function displayAnswerThing(boolean) {
  if (boolean) {
   answerThing.innerHTML = rightAnswer; 
  } else {
   answerThing.innerHTML = wrongAnswer; 
  }
}

function confirmGenProblem() {
    userAnswer = input.value;
 if (confirmAnswer()) {
     //Reset The Problem
     setProblem();
     //Temp Alert System
     alert(rightAnswer);
     //Change to the new problem
     document.getElementById("htmlQuestion").innerHTML = questionText;
     //Reset old answer
     userAnswer = 0;
     input.value = ' ';
     //New answer thing
     displayAnswerThing(true);
     return 1;
 } else {
     alert(wrongAnswer);
     displayAnswerThing(false);
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
document.getElementById("htmlQuestion").innerHTML = "What is " + dice1 + " " + getReadableOperation(problem) + dice2 + "?";
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    confirmGenProblem();
  }
});


