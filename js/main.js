// setting up arrays to keep track on sequences 
let simonSequence = [];
let playerSequence = [];

const playButton = document.querySelector('.play-button');
let update = document.querySelector('.update');

function initGame() {
    update.textContent = 'Try to keep up!';
}
playButton.addEventListener('click', initGame);3


function simonNewClick() {
    const board = ['one', 'two', 'three', 'four'];
    let newClick = board[Math.floor(Math.random() * board.length)];
    return newClick;
};