// iniciar minhas variaveis

let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 1;
let symbols = ['O', 'X'];
let gameOver = false;
let scoreboardX = 0;
let scoreboardO = 0;
let scoreboardNone = 0;


let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {

    if (gameOver == "win") {
        return;
    }
    if (gameOver == "empate") {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (!gameOver) {
            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }

    return gameOver;

}

function isWin() {


    if (board[0] != '' &&
        board[1] != '' &&
        board[2] != '' &&
        board[3] != '' &&
        board[4] != '' &&
        board[5] != '' &&
        board[6] != '' &&
        board[7] != '' &&
        board[8] != '') {
        return "empate";
    }

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return "win";
        }

    }

}