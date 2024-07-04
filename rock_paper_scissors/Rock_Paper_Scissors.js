let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
updateScore();


document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('rock');
  }else if(event.key ==='p'){
    playGame('paper');
  }else if(event.key==='s'){
    playGame('scissors');
  }else if(event.key === 'a'){
    autoplay();
  }else if(event.key==='Backspace'){
    reset_ask();
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
   }else if(playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
   }else if(playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
  }

  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.losses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  
  updateScore();
  document.querySelector('.js-result').innerHTML=result;
  document.querySelector('.js-moves').innerHTML=` You <img src="${playerMove}-emoji.png" class="rps"> -
<img src="${computerMove}-emoji.png" class="rps"> Computer`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function updateScore(){
  document.querySelector('.js-score')
  .innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
let isAutoplaying = false;
let intervalId;
function autoplay(){
  if(!isAutoplaying){
    intervalId= setInterval(
      function(){
        const playerMove = pickComputerMove();
        playGame(playerMove);
      },1000)
      isAutoplaying=true;
  }else{
    clearInterval(intervalId);
    isAutoplaying=false;
  }
}
function reset(){
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScore();
}
r_a =document.querySelector('.reset-ask');
function reset_ask(){
  r_a.innerHTML='<p style="display:inline-block">Are you sure you want to reset the score</p> \
  <button class="y-s-buttons" onclick="reset();r_a.innerHTML=``;">Yes</button>\
  <button class="y-s-buttons" onclick="r_a.innerHTML=``;">No</button>';
}
