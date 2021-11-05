console.log('Welcome!');

//Declares function computerPlay to randomly output 'rock' 'paper' or 'scissors'
function compPlay() {
    const compOptions = ['Rock', 'Paper', 'Scissors'];
    let compRandom = Math.floor(Math.random() * compOptions.length);
    let compSelect = compOptions[compRandom];
    return compSelect;
}
//console.log(compPlay());

//Declares function taking output from computerPlay and userPlay
//rock beats scissors
//scissors beats paper
//paper beats rock
function playRound(userPlay, compPlay) {
    if (compPlay === 'Rock' && userPlay === 'Scissors'
        || compPlay === 'Scissors' && userPlay === 'Paper'
        || compPlay === 'Paper' && userPlay === 'Rock') {
        results.textContent = `You Lose! ${compPlay} beats ${userPlay}`;
        return 'compWin';
    }
    else if (compPlay === 'Scissors' && userPlay === 'Rock'
        || compPlay === 'Paper' && userPlay === 'Scissors'
        || compPlay === 'Rock' && userPlay === 'Paper') {
        results.textContent = `You Win! ${userPlay} beats ${compPlay}`;
        return 'userWin';
    }
    else {
        results.textContent = `Draw! We both chose ${compPlay}!`;
    }
}

function game(whoWins) {
    if (whoWins === 'userWin') {
        userScore++;
    }
    else if (whoWins === 'compWin') {
        compScore++;
    }
    userScoreDisp.textContent = `user: ${userScore}`;
    compScoreDisp.textContent = `comp: ${compScore}`;
    if (userScore === 5 || compScore === 5) {
        if (userScore > compScore) {
            winner.textContent = 'You\'re the Champion!';
        }
        else if (userScore < compScore) {
            winner.textContent = 'I\'m the Champion!';
        }
        else winner.textContent = 'We\'re both Champs!';
        userScore = 0;
        compScore = 0;
    }
}

let userScore = 0;
let compScore = 0;

const rock = document.getElementById('Rock');
const paper = document.querySelector('#Paper');
const scissors = document.getElementById('Scissors');
const btns = document.querySelectorAll('button');

const results = document.getElementById('results');
const compScoreDisp = document.getElementById('compScore');
const userScoreDisp = document.getElementById('userScore');
const winner = document.getElementById('winner');

btns.forEach(btn => btn.addEventListener('click', function () {
    if (winner.textContent) { winner.textContent = '' }
    const userPlay = btn.id;
    let whoWins = playRound(userPlay, compPlay());
    game(whoWins);
}))
