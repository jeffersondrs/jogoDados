'use strict';

// selecionando elementos
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Começando as condiçoes
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// funcionalidade dos dados rolando
btnRoll.addEventListener('click', function(){
    //1 gerar uma rolagem de dado aleatoria
    const dice = Math.trunc(Math.random() * 6)+ 1;

    //2 mostrar o dado
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3 checar o dado rolado 1 : if true, switch to next player 
})


// document.querySelector('.dice').style.display = 'none';