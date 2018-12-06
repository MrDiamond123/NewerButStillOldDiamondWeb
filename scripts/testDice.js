var dice1; //1st Dice Value
var dice2; //2nd Dice Value
var problem; 
var getAnswer;
var userAnswer;
var readableProblem;
var stringedAnswer;

var getReadableProblem = function getReadableProblem(problemA) {
   if (problemA = 1) {
    return "+";
 } else if (problemA = 2) {
    return "-";
 } else if (problemA = 3) {
    return "*";
 } else if (problemA = 4) {
    return "/";
 }
}

function getProblem(){
  return problem;  
}


function getAnswer(dice1, dice2, problem) {
    if (problem = 1) {
      return dice1 + dice2;
    }
    if (problem = 2) {
      return dice1 - dice2;
    }
    if (problem = 3) {
      return dice1 * dice2;
    }
    if (problem = 4) {
      return dice1 / dice2;
    }
  
}



function setProblem() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  problem = Math.floor(Math.random() * 3) + 1;
  return 0;
}


function askProblem() {
    userAnswer = prompt("What is" + dice1 + getReadableProblem(problem) + dice2 + "?");
    getAnswer(dice1, dice2, problem);
    stringedAnswer = getAnswer(dice1, dice2, problem).toString();
    if (userAnswer == stringedAnswer) {
        alert("Good Job!");
        setProblem();
        return 0;
    } else {
      alert("You will get it next time!");
      setProblem();
      return 1;
    }
}    


function doAllThings() {
  setProblem();
  askProblem();
}
