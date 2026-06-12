const container = document.getElementById("container");

let gameboard = [["","",""],["","",""],["","",""]];

let fl = 0;
let count = 0;

function checkStatus() {
    if (gameboard[1][1] !== "" && (
        (gameboard[0][0] === gameboard[1][1] && gameboard[1][1] === gameboard[2][2]) ||
        (gameboard[0][2] === gameboard[1][1] && gameboard[1][1] === gameboard[2][0])
    )) {
        fl = 1;
        return;
    }

    for (let i = 0; i < 3; i++) {
        if (gameboard[i][0] !== "" && gameboard[i][0] === gameboard[i][1] && gameboard[i][1] === gameboard[i][2]) {
            fl = 1;
            return;
        }
        if (gameboard[0][i] !== "" && gameboard[0][i] === gameboard[1][i] && gameboard[1][i] === gameboard[2][i]) {
            fl = 1;
            return;
        }
    }
}

function play(){
    let currentPlayer = "X";
    while (count !== 9 && fl === 0){
        let row = parseInt(prompt("Enter the index of row"));
        let col = parseInt(prompt("Enter the index of col"));

        if (gameboard[row][col] === "" && row >= 0 && row <= 2 && col >= 0 && col <= 2){
            gameboard[row][col] = currentPlayer;
            count++;
            checkStatus();

            if (fl === 1){
                alert(`${currentPlayer} has won the game`);
                break;
            } 
            
            currentPlayer = (currentPlayer === "X")? "O" : "X";
        } else {
            alert("invalid move");
        }
    }
    if (fl === 0 && count === 9){
        alert("Its a draw");
    }
}

for (let i = 0; i < 9; i++){
    const box = document.createElement("div");
    box.classList.add("box");

    container.appendChild(box);
}