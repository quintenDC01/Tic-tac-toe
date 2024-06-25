let cells = document.querySelectorAll('.row > div')
let turnCounter = 0
let winnerTextAppear = document.querySelector('.winnerTitle')
let isGameOver = false


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
};

function cellClicked () {
    if (isGameOver) {resetGame(); return;}
    if (turnCounter % 2 === 0) {event.target.textContent = 'X'}
    else {event.target.textContent = 'O'};
    turnCounter++;   
    console.log(turnCounter)
    if (turnCounter === 9) {winnerTextAppear.textContent = 'Draw';  isGameOver = true;}
    else if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}
    else if (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X') {winnerTextAppear.textContent = 'winner'; isGameOver = true;}  
}

function resetGame () {
        {for (let i = 0; i < cells.length; i++) {cells[i].textContent = ''};
        winnerTextAppear.textContent = '';
        turnCounter = 0;
        isGameOver = false;
        }
}

//for (let i = 0; i < cells.length; i++) {cells[i].addEventListener('click', resetGame)}









