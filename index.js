let scores, roundScores, activePlayer;

scores = [0,0];
roundScores = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

document.querySelector('.btn-roll').addEventListener('click', function(){

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
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //toggle
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }

});