var dice1; //1st Dice Value
var dice2; //2nd Dice Value
var problem; 
var answer;
var userAnswer;
var readableProblem;


function getAnswer(dice1, dice2, problem) {
    if (problem = 1) {
      answer = dice1 + dice2;
      return answer;
    }
    if (problem = 2) {
      answer = dice1 - dice2;
      return answer;
    }
    if (problem = 3) {
      answer = dice1 * dice2;
      return answer;
    }
    if (problem = 4) {
      answer = dice1 / dice2;
      return answer;
    }
  
}

function setProblem() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  problem = Math.floor(Math.random() * 3) + 1;
  return 0;
}

function isUserRight() {
    if (userAnswer = answer) {
        alert("You got it right!"); 
        setProblem();
        return 0;
    } else {  
        alert("You will do good next time!"); 
        setProblem();
        return 1;
    }
}

function getReadableProblem(problemA) {
   if (problemA = 1) {
    return "+"   
 } else if (problemA = 2) {
    return "-" 
 } else if (problemA = 3) {
    return "*"
 } else if (problemA = 4) {
    return "/" 
 }
}

function askProblem() {
    userAnswer = prompt("What is" + dice1 + getReadableProblem(problem) + dice2 + "?");
    if (userAnswer = answer) {
        
    } else 
}    
