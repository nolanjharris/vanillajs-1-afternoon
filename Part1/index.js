let board = [];

function play(clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = "X";
        clickedElement.removeAttribute('onclick');
        board[clickedId] = "X";
    } else {
        playerSpan.innerHTML = "X";
        clickedElement.innerText = "O";
        clickedElement.removeAttribute('onclick');
        board[clickedId] = "O";
    }
    console.log(board);

    if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]) {
        alert('WINNER IS PLAYER ' + board[0]);
        resetBoard();
    }

    if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]) {
        alert('WINNER IS PLAYER ' + board[4]);
        resetBoard();
    }

    if (board[6] !== undefined && board[6] === board[7] && board[7] === board[8]) {
        alert('WINNER IS PLAYER ' + board[7]);
        resetBoard();
    }

    if (board[0] !== undefined && board[0] === board[3] && board[3] === board[6]) {
        alert('WINNER IS PLAYER ' + board[0]);
        resetBoard();
    }

    if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]) {
        alert('WINNER IS PLAYER ' + board[7]);
        resetBoard();
    }

    if (board[2] !== undefined && board[2] === board[5] && board[5] === board[8]) {
        alert('WINNER IS PLAYER ' + board[8]);
        resetBoard();
    }

    if (board[0] !== undefined && board[0] === board[4] && board[4] === board[8]) {
        alert('WINNER IS PLAYER ' + board[8]);
        resetBoard();
    }

    if (board[2] !== undefined && board[2] === board[4] && board[4] === board[6]) {
        alert('WINNER IS PLAYER ' + board[7]);
        resetBoard();
    }

    let catsGame = true;

    if (board.length === 9) {
        for (let i = 0; i < board.length; i++) {
            board[i] === undefined ? catsGame = false : board[i];
        }
        if (catsGame === true) {
            alert("CAT's game!!! So really, you both lose...");
            resetBoard();
        }
    }


    // }
}

function resetBoard() {
    let boxes = document.getElementsByTagName('td');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
        boxes[i].setAttribute("onclick", `play(${i})`);
    }
    board.splice(0, board.length);
}