'use strict';

// selecionando elementos
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//Começando as condiçoes
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


// funcionalidade dos dados rolando
btnRoll.addEventListener('click', function(){
    //1 gerar uma rolagem de dado aleatoria
    const dice = Math.trunc(Math.random() * 6)+ 1;

    //2 mostrar o dado
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3 checar o dado rolado 1 
    if(dice !== 1){
        // adiciona o numero do dado ao score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
      //switch to next player
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
    }
})


// document.querySelector('.dice').style.display = 'none';