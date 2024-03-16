const sides = document.querySelectorAll(".side");
const PLAYER_X = "X";
const PLAYER_O = "0";
let turn = PLAYER_X;

const boardstate = Array(sides.length);
boardstate.fill(null);

const strike = document.getElementById("strike");

sides.forEach((side) => side.addEventListener("click", sideclick));

function sideclick(event){
    const side = event.target;
    const sidenumber = side.dataset.index;
    if (side.innerText != "") {
        return;
        
    }

    if (turn === PLAYER_X) {
        side.innerText = PLAYER_X;
        boardstate[sidenumber - 1] = PLAYER_X;
        turn = PLAYER_O; 
    }
    else {
        side.innerText = PLAYER_O;
        boardstate[sidenumber - 1] = PLAYER_O;
        turn = PLAYER_X; 
        
    }

    checkwinner();
}

function checkwinner() {
    for(const win of winningcombinations) {
        const { combo, strikeclass } = win;
        const sidevalue1 = boardstate[combo[0] - 1];
        const sidevalue2 = boardstate[combo[1] - 1];
        const sidevalue3= boardstate[combo[2] - 1];
    
        if(sidevalue1 != null && 
            sidevalue1 === sidevalue2  &&
            sidevalue1 === sidevalue3
        ) {
            strike.classList.add(strikeclass);
        }    
    }

}
 
const winningcombinations = [
    { combo: [1, 2, 3,], strikeclass: "strike-row-1"},
    { combo: [4, 5, 6,], strikeclass: "strike-row-2"},
    { combo: [7, 8, 9,], strikeclass: "strike-row-3"},

    { combo: [1, 4, 7,], strikeclass: "strike-column-1"},
    { combo: [2, 5, 8,], strikeclass: "strike-column-2"},
    { combo: [3, 6, 9,], strikeclass: "strike-column-3"},

    { combo: [1, 5, 9,], strikeclass: "strike-diagonal-1"},
    { combo: [3, 5, 7,], strikeclass: "strike-diagonal-2"},
];
