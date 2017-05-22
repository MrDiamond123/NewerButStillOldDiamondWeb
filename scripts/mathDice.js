var dice1; //1st Dice Value
var dice2; //2nd Dice Value
var problem; 
var answer;

var display1 = document.getElementById('dice1');
var display2 = document.getElementById('dice2');
var display3 = document.getElementById('operation');


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
      answer = dice1 / dice2;
      return answer;
    }
    if (problem = 4) {
      answer = dice1 * dice2;
      return answer;
    }
  
}

function displayProblem() {
    if (problem = 1) {
      
      
    }
    if (problem = 2) {
      answer = dice1 - dice2;
      
    }
    if (problem = 3) {
      answer = dice1 / dice2;
    }
    if (problem = 4) {
      answer = dice1 * dice2;
      
    }
  
}  




function setProblem() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  problem = Math.floor(Math.random() * 3) + 1 ;
  if (getAnswer(dice1, dice2, problem) < 1) {
    setProblem(); 
  } else displayProblem();
}


