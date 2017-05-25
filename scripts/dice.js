var dice_value;
function set_Dice(diceValue) {
   if (diceValue == 1) {
        document.getElementById('dice').src='assets/Dice1.svg';
        console.log("1");
     } else if (diceValue == 2) {
        document.getElementById('dice').src='assets/Dice2.svg';
        console.log("2");
     } else if (diceValue == 3) {
        document.getElementById('dice').src='assets/Dice3.svg';
        console.log("3");
     } else if (diceValue == 4) {
        document.getElementById('dice').src='assets/Dice4.svg';
        console.log("4");
     } else if (diceValue == 5) {
        document.getElementById('dice').src='assets/Dice5.svg';
        console.log("5");
     } else if (diceValue == 6) {
        document.getElementById('dice').src='assets/Dice6.svg';
        console.log("6");
     }
   
 }
 function check_Dice() {
     dice_value = Math.floor(Math.random() * 6) + 1;     // returns a number between 1 and 6
     if (dice_value == 1) {
        document.getElementById('dice').src='assets/Dice1.svg';
        console.log("1");
     } else if (dice_value == 2) {
        document.getElementById('dice').src='assets/Dice2.svg';
        console.log("2");
     } else if (dice_value == 3) {
        document.getElementById('dice').src='assets/Dice3.svg';
        console.log("3");
     } else if (dice_value == 4) {
        document.getElementById('dice').src='assets/Dice4.svg';
        console.log("4");
     } else if (dice_value == 5) {
        document.getElementById('dice').src='assets/Dice5.svg';
        console.log("5");
     } else if (dice_value == 6) {
        document.getElementById('dice').src='assets/Dice6.svg';
        console.log("6");
     }
   
    
 }

  function roll_Dice() {
   
   check_Dice();
   
   
     
   

  }
