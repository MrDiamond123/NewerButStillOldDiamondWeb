//Define dice1,dice2, and operation
var dice1 = Math.floor((Math.random() * 5) + 1);
var dice2 = Math.floor((Math.random() * 5) + 1);
var operation = Math.floor((Math.random() * 3) + 1);
var userAnswer;

//Functions
function resetProblem() {
  dice1 = Math.floor((Math.random() * 5) + 1);
  dice2 = Math.floor((Math.random() * 5) + 1);
  operation = Math.floor((Math.random() * 3) + 1);
}



function getReadableOperation() {
  if (operation = 1) {
    return "+";
  } else if (operation = 2) {
    return "-";
  } else if (operation = 3) {
    return "*";
  } else if (operation = 4) {
    return "/";
  } else return 1;
}

function askProblem() {
 userAnswer = prompt("What is " + dice1 + getReadableOperation + dice2 + "?");
 
}
