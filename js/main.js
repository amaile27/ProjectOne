// setting up arrays to keep track on sequences 
let simonSequence = [];
let playerSequence = [];
let simonTurn;
let playerTurn;
 


// grabbing play button and update message 
const playButton = document.querySelector('.play-button');
const updateMessage = document.querySelector('.update');



// event listeners
playButton.addEventListener('click', initGame);



// initiate new game -> newRound
function initGame() {
    simonSequence = null;
    simonTurn = true;
    updateMessage.textContent = 'Try to keep up!';
    newRound();
};


// simon starts a new round
// newRound calls newClick and 
function newRound() {
    simonSequence.push(newClick());
    playerTurn = true;
}


// calling for newClick in each newRound  
// i think i was making this too complicated so simplified but not sure if it still will work
function newClick() {
    const boards = ['one', 'two', 'three', 'four']; 
    return Math.floor(Math.random() * boards.length);
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






