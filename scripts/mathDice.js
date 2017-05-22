var dice1;
var dice2;
var problem;
var answer;
var display1 = document.getElementById('dice1');
var display2 = document.getElementById('dice2');
var display3 = document.getElementById('dice3');


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
}  




function setProblem() {
  dice1 = Math.floor(Math.random() * 7);
  dice2 = Math.floor(Math.random() * 7);
  problem = Math.floor(Math.random() * 4);
  if (getAnswer(dice1, dice2, problem) < 1) {
    setProblem(); 
  } else displayProblem();
}


