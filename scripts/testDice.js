
var max;
var min;

var dmax = 6;
var dmin = 0;

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

var amountRight = 0;
var amountRightDisplay = document.getElementById("amountRight");
var amountRightText = "Correct Answers: ";

var correctStreak = 0;
var correctStreakDisplay = document.getElementById("correctStreak");
var correctStreakText = "Current Streak: ";

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

function resetText() {  
  document.getElementById("htmlQuestion").innerHTML = "What is " + dice1 + " " + getReadableOperation(problem) + dice2 + "?";
}

function setProblem() {
  dice1 = Math.floor(Math.random() * (max - min + 1) ) + min;
  dice2 = Math.floor(Math.random() * (max - min + 1) ) + min;
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
   answerThing.style.color = "green";
  } else {
   answerThing.innerHTML = wrongAnswer; 
   answerThing.style.color = "red";
  }
}

function displayCorrectRight() {
    amountRightDisplay.innerHTML = amountRightText + amountRight;
}
function displayCorrectStreak() {
    correctStreakDisplay.innerHTML = correctStreakText + correctStreak;   
}    


function confirmGenProblem() {
    userAnswer = input.value;
 if (confirmAnswer()) {
     //Reset The Problem
     setProblem();
     
     //Change to the new problem
     document.getElementById("htmlQuestion").innerHTML = questionText;
     
     //Reset old answer
     userAnswer = 0;
     input.value = ' ';
     
     //Tell user that the answer was correct
     displayAnswerThing(true);
     
     //Change the amount right counter
     amountRight = amountRight + 1;
     
     //Change the correct streak counter
     correctStreak = correctStreak + 1;
     
     //Display amount right and correct streak
     displayCorrectRight();
     displayCorrectStreak();
     return 1;
 } else {
     displayAnswerThing(false);
     correctStreak = 0;
     displayCorrectStreak();
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

function resetSettings () {
 max = dmax;
 min = dmin;
    
 document.getElementById("maxProblem").value = dmax;
 document.getElementById("minProblem").value = dmin;
   
 correctStreak = 0;
 amountRight = 0;
  
 setProblem();
 document.getElementById("htmlQuestion").innerHTML = questionText;

}

function changeSettings () {
    max = document.getElementById("maxProblem").value;
    min = document.getElementById("minProblem").value;
    correctStreak = 0;
    amountRight = 0;
    setProblem();
    document.getElementById("htmlQuestion").innerHTML = questionText;
}

//SETUP FOR HTML
resetSettings();
setProblem();
document.getElementById("htmlQuestion").innerHTML = questionText;
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    confirmGenProblem();
  }
});


