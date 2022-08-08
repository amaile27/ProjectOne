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
    newRound();
}
playButton.addEventListener('click', initGame);

// Creating array to represent 4 board buttons
// Creating function for new click by simon, needs to be random choice, rounded number within board length. 
// Now the players turn 
// Pushing new click to simon's sequence 


function newClick() {
    const boards = ['one', 'two', 'three', 'four']; 
    let boardClick = boards[Math.floor(Math.random() * boards.length)];
    return boardClick;
};




// figured out how to get all these event listeners into one function yay! 
// will need to call this function when rendering new sequence?
function colorChange() {
let buttons = document.querySelectorAll('.game-button');
    buttons.forEach(function(item) {
        item.addEventListener('click', function onClick() {
            item.style.backgroundColor = 'white';
            setTimeout(function() {
                item.style.backgroundColor = '';
            }, 200);
        });
    });
};  
colorChange();



//Hoping this will keep track of new sequence each round
function newSequence(i) {
    if (i = 0, i < simonSequence.length, i++) {
        colorChange(simonSequence[i]);
        setTimeout(function() {
            newSequence(i);
        }, 400);
    };
};