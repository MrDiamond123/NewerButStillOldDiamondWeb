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
    //Dice1 Display Code
    if (dice1 = 1) {
      display1.src(""); 
    }
    
    if (dice1 = 2) {
      display1.src(""); 
    }
  
    if (dice1 = 3) {
      display1.src(""); 
    }
  
    if (dice1 = 4) {
      display1.src(""); 
    }
  
    if (dice1 = 5) {
      display1.src(""); 
    }
  
    if (dice1 = 6) {
      display1.src(""); 
    }
    //Dice2 Display Code
    if (dice2 = 1) {
      display2.src(""); 
    }
    
    if (dice2 = 2) {
      display2.src(""); 
    }
  
    if (dice2 = 3) {
      display2.src(""); 
    }
  
    if (dice2 = 4) {
      display2.src(""); 
    }
  
    if (dice2 = 5) {
      display2.src(""); 
    }
  
    if (dice2 = 6) {
      display2.src(""); 
    }
    //Operator Display Code
    if (problem = 1) {
      display3.src("");
    }
    if (problem = 2) {
      display3.src("");
    }
    if (problem = 3) {
      display3.src("");
    }
    if (problem = 4) {
      display3.src("");      
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


