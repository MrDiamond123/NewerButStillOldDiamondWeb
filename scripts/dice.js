 var dice_value;
 function dice_cycle() {
  setTimeout(document.getElementById('dice').src='assets/Dice6.png';, 500);
  setTimeout(document.getElementById('dice').src='assets/Dice5.png';, 500);
  setTimeout(document.getElementById('dice').src='assets/Dice4.png';, 500);
  setTimeout(document.getElementById('dice').src='assets/Dice3.png';, 500);
  setTimeout(document.getElementById('dice').src='assets/Dice2.png';, 500);
  setTimeout(document.getElementById('dice').src='assets/Dice1.p()ng';, 500);
  
  
 }


  function roll_dice() {
    dice_value = Math.floor(Math.random() * 6) + 1;     // returns a number between 1 and 6
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
   
   dice_cycle();
    
  }
