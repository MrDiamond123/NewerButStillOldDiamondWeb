var dice1;
var dice2;
var problem;
var answer;

function giveProblem() {
  
  
}

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


