// setting up arrays to keep track on sequences 
let simonSequence = [];
let playerSequence = [];
let simonTurn;
let playerTurn;
 
// grabbing play button and update message 
// initializing the game with no sequence yet, simons turn, run update message
// ivoking this function with player clicking play button
const playButton = document.querySelector('.play-button');
let updateMessage = document.querySelector('.update');

function initGame() {
    simonSequence = null;
    simonTurn = true;
    updateMessage.textContent = 'Try to keep up!';
}
playButton.addEventListener('click', initGame);

// Creating array to represent 4 board buttons
// Creating function for new click by simon, needs to be random choice, rounded number within board length. 
// Now the players turn 
// Pushing new click to simon's sequence 
const boards = ['one', 'two', 'three', 'four']; 

function simonNewClick() {
    let newClick = boards[Math.floor(Math.random() * boards.length)];
    playerTurn = true;
    return newClick;
}
simonSequence.push(simonNewClick());


// Make buttons turn to white on click and setting timeout to 250
// I know theres a way to get all these event listeners into one function 
// but this is how i can get it working on the board for now. 
// const one = document.getElementById('one');
// one.addEventListener('click', function onClick() {
//     one.style.backgroundColor = 'white';
//     setTimeout(() => {
//         one.style.backgroundColor = '';
//     }, 250);
// });

// const two = document.getElementById('two');
// two.addEventListener('click', function onClick() {
//     two.style.backgroundColor = 'white';
//     setTimeout(() => {
//         two.style.backgroundColor = '';
//     }, 250);
// });

// const three = document.getElementById('three');
// three.addEventListener('click', function onClick() {
//     three.style.backgroundColor = 'white';
//     setTimeout(() => {
//         three.style.backgroundColor = '';
//     }, 250);
// });

// const four = document.getElementById('four');
// four.addEventListener('click', function onClick() {
//     four.style.backgroundColor = 'white';
//     setTimeout(() => {
//         four.style.backgroundColor = '';
//     }, 250);
// });



// trying to get all these above in a function
let buttons = document.querySelectorAll('.game-button');
buttons.forEach(function(item) {
    item.addEventListener('click', function onClick() {
        item.style.backgroundColor = 'white';
        setTimeout(() => {
            item.style.backgroundColor = '';
        }, 250);
    });
});
    