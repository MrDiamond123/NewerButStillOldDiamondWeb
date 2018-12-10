var dice1; //1st Dice Value
var dice2; //2nd Dice Value
var problem; 
var getAnswer;
var userAnswer;
var readableOperation;
var stringedAnswer;

function getReadableOperation (problem) {
if (problem == 1) {
    return "+";
 } else if (problem == 2) {
    return "-";
 } else if (problem == 3) {
    return "*";
 } else if (problem == 4) {
    return "/";
 }
}

function getProblem(){
  return problem;  
}


function getAnswer(dice1, dice2, problem) {
    if (problem == 1) {
      return dice1 + dice2;
    }
    if (problem == 2) {
        if (dice1 < dice2) {
         return dice2 - dice1;   
        }
        else {
      return dice1 - dice2;
        }
    }
    if (problem == 3) {
      return dice1 * dice2;
    }
    if (problem == 4) {
      return dice1 / dice2;
    }
  
}



function setProblem() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  problem = Math.floor(Math.random() * 3) + 1;
  return 0;
}



function getHumanProblem(dice1, dice2, problem) {
    
    
    
    
}



function askProblem() {
   
    userAnswer = prompt("What is" + dice1 + getReadableOperation(problem) + dice2 + "?");
    getAnswer(dice1, dice2, problem);
    stringedAnswer = getAnswer(dice1, dice2, problem).toString();
    if (userAnswer == stringedAnswer) {
        alert("Good Job!");
        return 0;
    } else {
      alert("You will get it next time!");
      return 1;
    }
}    


function doAllThings() {
  setProblem();
  askProblem();
}
