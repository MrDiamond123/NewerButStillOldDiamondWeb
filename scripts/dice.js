var dice_value;
function set_Dice(diceValue) {
   if (diceValue == 1) {
        document.getElementById('dice').src='assets/Dice1.png';
     } else if (diceValue == 2) {
        document.getElementById('dice').src='assets/Dice2.png';
     } else if (diceValue == 3) {
        document.getElementById('dice').src='assets/Dice3.png';
     } else if (diceValue == 4) {
        document.getElementById('dice').src='assets/Dice4.png';
     } else if (diceValue == 5) {
        document.getElementById('dice').src='assets/Dice5.png';
     } else if (diceValue == 6) {
        document.getElementById('dice').src='assets/Dice6.png';
     }
   
 }

 function cycle_Dice() {
  setTimeout (set_Dice(6), 60);
    
  setTimeout (set_Dice(5), 50);
    
  setTimeout (set_Dice(4), 40);
    
  setTimeout (set_Dice(3), 30);
    
  setTimeout (set_Dice(2), 20);
    
  setTimeout (set_Dice(1), 10);
  
  
 }

 function check_Dice() {
     if (dice_value == 1) {
        document.getElementById('dice').src='assets/Dice1.png';
     } else if (dice_value == 2) {
        document.getElementById('dice').src='assets/Dice2.png';
     } else if (dice_value == 3) {
        document.getElementById('dice').src='assets/Dice3.png';
     } else if (dice_value == 4) {
        document.getElementById('dice').src='assets/Dice4.png';
     } else if (dice_value == 5) {
        document.getElementById('dice').src='assets/Dice5.png';
     } else if (dice_value == 6) {
        document.getElementById('dice').src='assets/Dice6.png';
     }
   
    
 }


  function roll_Dice() {
   dice_value = Math.floor(Math.random() * 6) + 1;     // returns a number between 1 and 6
   setTimeout( check_Dice(), 700);
   cycle_Dice();
    
  }
