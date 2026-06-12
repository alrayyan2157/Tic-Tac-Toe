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

let currentPlayer = "X";

function play(row,col){

    if (count !== 9 && fl === 0){

        if (gameboard[row][col] === "" && row >= 0 && row <= 2 && col >= 0 && col <= 2){
            gameboard[row][col] = currentPlayer;
            count++;
            checkStatus();

            if (fl === 1){
                alert(`${currentPlayer} has won the game`);
                return;
            } 

            if (count === 9){
                alert("Its a draw");
                return;
            }
            
            currentPlayer = (currentPlayer === "X")? "O" : "X";
        } else {
            alert("invalid move");
        }
    }
}

for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.dataset.row = i;
        box.dataset.col = j;

        box.addEventListener("click",(e)=>{
            let targetRow = parseInt(e.currentTarget.dataset.row);
            let targetCol = parseInt(e.currentTarget.dataset.col);
            play(targetRow,targetCol);
            box.innerHTML = gameboard[targetRow][targetCol];
        });

        container.appendChild(box);

    }
}