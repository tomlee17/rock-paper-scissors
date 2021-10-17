console.log('Welcome!');

//Declares function computerPlay to randomly output 'rock' 'paper' or 'scissors'
function compPlay() {
    const compOptions = ['Rock', 'Paper', 'Scissors'];
    let compRandom = Math.floor(Math.random() * compOptions.length);
    let compSelect = compOptions[compRandom];
    return compSelect;
}
//console.log(compPlay());

//Prompt user to input between 'rock' 'paper' or 'scissors'
function userPlay() {
    let userPlayRaw = prompt('Input Rock, Paper or Scissors', 'rock');
    if (userPlayRaw === null || userPlayRaw === '') {
        console.log('Please input only Rock, Paper or Scissors!');
    }
    else {
        return userPlayRaw.charAt(0).toUpperCase() + userPlayRaw.slice(1).toLowerCase();
    }
}
//console.log(userPlay());

//Declares function taking output from computerPlay and userPlay
//rock beats scissors
//scissors beats paper
//paper beats rock
function playRound(userPlay, compPlay) {
    if (compPlay === 'Rock' && userPlay === 'Scissors'
        || compPlay === 'Scissors' && userPlay === 'Paper'
        || compPlay === 'Paper' && userPlay === 'Rock') {
        console.log(`You Lose! ${compPlay} beats ${userPlay}`);
        return 'compWin';
    }
    else if (compPlay === 'Scissors' && userPlay === 'Rock'
        || compPlay === 'Paper' && userPlay === 'Scissors'
        || compPlay === 'Rock' && userPlay === 'Paper') {
        console.log(`You Win! ${userPlay} beats ${compPlay}`);
        return 'userWin';
    }
    else if (compPlay === userPlay) {
        console.log(`Draw! We both chose ${compPlay}!`);
        return 'draw';
    }
    else {
        console.log('Please input only Rock, Paper or Scissors!');
        return 'false';
    }
}
//console.log(playRound(userPlay(), compPlay()));

function game() {

    let userScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let whoWins = playRound(userPlay(), compPlay());
        if (whoWins === 'userWin') {
            userScore += 1;
            console.log('user:' + userScore);
        }
        else if (whoWins === 'compWin') {
            compScore += 1;
            console.log('comp:' + compScore);
        }
        else if (whoWins === 'false') {
            i -= 1;
        }
        console.log('i:' + i);
    }
    if (userScore > compScore) {
        console.log('You\'re the Champion!');
    }
    else if (userScore < compScore) {
        console.log('I\'m the Champion!');
    }
    else console.log('We\'re both Champs!');

}
game();

