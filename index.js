let scores, roundScores, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying){
      //1. Random nuber
    let dice = Math.floor(Math.random() * 6) + 1;
    // document.querySelector('#current-' + activePlayer).textContent = dice;


    //2. Display the result
    let diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3. Update the round score if the rolled number was NOT = 1
    if (dice !== 1){
      //Add score
      roundScores += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else{
      //Next player
    nextPlayer();
    }
  }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if (gamePlaying) {
      //Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScores;
  
  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // Check if player won the game
   if (scores[activePlayer] >= 100){
     document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
     document.querySelector('.dice').style.display = 'none'; 
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

  document.querySelector('.dice').style.display = 'none'; 

 }

 function init(){
  scores = [0,0];
  roundScores = 0;
  activePlayer = 0;
  gamePlaying = true; 

  document.querySelector('.dice').style.display = 'none';

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