document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

});

function handleClick(event) {

    let square = event.target;
    let position = square.id;
    let msg = document.getElementById('msg');

    let resutaldo = handleMove(position);

    if (resutaldo == 'win') {
        msg.innerHTML = 'o jogo acabou!<br>O "' + symbols[playerTime] + '" foi o vencedor.';
        scoreboard(symbols[playerTime]);
    }
    if (resutaldo == 'empate') {
        msg.innerHTML = 'o jogo acabou!<br>O jogo empatou.';
        scoreboard('empate');
    }
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];

    square.innerHTML = '<div class="symbol">' + symbol + '</div>';
}


function restartGame() {
    let squares = document.querySelectorAll('.square');
    let msg = document.getElementById("msg");

    msg.innerHTML = "";

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 1;
    gameOver = false;

    squares.forEach((square) => {
        square.innerHTML = '';
    });
}

function scoreboard(result) {
    let placarX = document.getElementById('placarX');
    let placarO = document.getElementById('placarO');
    let placarEmpates = document.getElementById('placarEmpates');

    if (result == 'X') {
        scoreboardX += 1;
        placarX.innerHTML = scoreboardX;
    }
    if (result == 'O') {
        scoreboardO += 1;
        placarO.innerHTML = scoreboardO;
    }
    if (result == 'empate') {
        scoreboardNone += 1;
        placarEmpates.innerHTML = scoreboardNone;
    }
}

function resetScoreboard() {
    let placarX = document.getElementById('placarX');
    let placarO = document.getElementById('placarO');
    let placarEmpates = document.getElementById('placarEmpates');

    scoreboardX = 0;
    scoreboardO = 0;
    scoreboardNone = 0;

    placarX.innerHTML = scoreboardX;
    placarO.innerHTML = scoreboardO;
    placarEmpates.innerHTML = scoreboardNone;
}