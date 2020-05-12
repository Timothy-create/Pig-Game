let scores, roundScores, activePlayer, gamePlaying;

init();

let lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying){
      //1. Random nuber
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
   

    //2. Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    // let diceDom = document.querySelector('.dice')
    // diceDom.style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    //3. Update the round score if the rolled number was NOT = 1
    if (dice1 !== 1 && dice2 !== 1){
      //Add score
      roundScores += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else{
      //Next player

    nextPlayer();
    }
    // if (dice === 6 && lastDice === 6){
          //  dice1 !== 1 && dice2 !== 1
    //     //player looses score
    //     scores[activePlayer] = 0;
    //     document.querySelector('#score-' + activePlayer).textContent = '0';
    //     nextPlayer();
    // }else if (dice1 !== 1 && dice2 !== 1){
    //   //Add score
    //   roundScores += dice;
    //   document.querySelector('#current-' + activePlayer).textContent = roundScores;
    // } else{
    //   //Next player
    //     nextPlayer();
    // }

    // lastDice = dice;
  } 
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if (gamePlaying) {
      //Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScores;
  
  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  let input = document.querySelector('.final-score').value;
  let winningScore;
  //undefined, 0, null, or "" are COERCED to false
  //Anything else is COERCED to true
  if (input){
      winningScore = input;
  }else{
    winningScore = 100;
  }

  // Check if player won the game
   if (scores[activePlayer] >= winningScore){
     document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
     document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none'; 
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
     gamePlaying = false;
   }else{
       //Next player
       nextPlayer();
   }
  } 
  
});

document.querySelector('.btn-new').addEventListener('click', init);

 function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScores = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //toggle
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none'; 

 }

 function init(){
  scores = [0,0];
  roundScores = 0;
  activePlayer = 0;
  gamePlaying = true; 

  document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';;

  document.getElementById('score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  document.getElementById('name-0').textContent = 'Player-1';
  document.getElementById('name-1').textContent = 'Player-2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active'); 
 }