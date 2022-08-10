// variables 
let simonSequence = [];
let playerSequence = [];
let simonTurn;
let playerTurn;
let board;

 

// grabbing play button and update message 
const playButton = document.querySelector('.play-button');
const updateMessage = document.querySelector('.update');


// event listener to start game
playButton.addEventListener('click', initGame);



// initiate new game -> newRound
function initGame() {
    simonSequence = [];
    simonTurn = true;
    updateMessage.textContent = 'Try to keep up!';
    newRound();
};

 

// simon starts a new round
// newRound calls newClick and 
function newRound() {
    let newSequence = [simonSequence.push(newClick())];
    playerTurn = true;
    return newSequence;
};
showMoves(board);



// calling for newClick in each newRound  
// i think i was making this too complicated so simplified but not sure if it still will work
function newClick() {
    let randomClick = [Math.floor(Math.random() * 4)];
    return randomClick;
};

// great idea from kenny in office hours 
// I want to call this function above in newround but it won't let me. Off to take a break.
function showMoves(board) {
    
    switch (board){
        case 0:
              document.getElementById('0').addClass("active");
              setTimeout(function(){
                document.getElementById('0').removeClass("active");
              },200)
              break;
        case 1:
            document.getElementById('1').addClass("active");
              setTimeout(function(){
                document.getElementById('1').removeClass("active");
              },200)
              break;
        case 2:
            document.getElementById('2').addClass("active");
              setTimeout(function(){
                document.getElementById('2').removeClass("active");
              },200)
              break;
        case 3:
            ddocument.getElementById('3').addClass("active");
            setTimeout(function(){
              document.getElementById('3').removeClass("active");
            },200)
            break;
    }
 };



//Might still need this code below for player?

// // figured out how to get all these event listeners into one function yay! 
// // will need to call this function in play game
// function colorChange() {
//     let buttons = document.querySelectorAll('.game-button');
//     buttons.forEach(function(item) {
//         item.addEventListener('click', function onClick() {
//             item.style.backgroundColor = 'white';
//              setTimeout(function() {
//                 item.style.backgroundColor = '';
//             }, 200);
//         });
//     });
// }; 