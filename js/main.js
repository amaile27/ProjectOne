// setting up arrays to keep track on sequences 
let simonSequence = [];
let simonTurn;
let playerSequence = [];
let playerTurn;

const playButton = document.querySelector('.play-button');
let update = document.querySelector('.update');

function initGame() {
    simonSequence = null;
    simonTurn = true;
    update.textContent = 'Try to keep up!';
}
playButton.addEventListener('click', initGame);

const boards = ['one', 'two', 'three', 'four'];

function simonNewClick() {
    let newClick = boards[Math.floor(Math.random() * boards.length)];
    playerTurn = true;
    return newClick;
}
simonSequence.push(simonNewClick());


const buttons = document.querySelectorAll('.game-button');

// I know theres a way to get all these event listeners into one function but haven't figrued it out yet. i think use forEach to iterate over?
const one = document.getElementById('one');

one.addEventListener('click', function onClick() {
    one.style.backgroundColor = 'white';
    setTimeout(() => {
        one.style.backgroundColor = '';
    }, 250);
});

const two = document.getElementById('two');

two.addEventListener('click', function onClick() {
    two.style.backgroundColor = 'white';
    setTimeout(() => {
        two.style.backgroundColor = '';
    }, 250);
});

const three = document.getElementById('three');

three.addEventListener('click', function onClick() {
    three.style.backgroundColor = 'white';
    setTimeout(() => {
        three.style.backgroundColor = '';
    }, 250);
});

const four = document.getElementById('four');

four.addEventListener('click', function onClick() {
    four.style.backgroundColor = 'white';
    setTimeout(() => {
        four.style.backgroundColor = '';
    }, 250);
});