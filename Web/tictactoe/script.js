let board = document.querySelectorAll(".elements");

const msg= document.getElementById("status");
const reset = document.getElementById("reset");

let turn = true;
board.forEach((cell) => {
    cell.addEventListener("click", ()=>{
        if(turn === true){
            cell.innerHTML = "X";
            turn = false;
        }
        else{
            cell.innerHTML = "O";
            turn = true;
        }
        cell.disabled = true;

        winner();
    })
})

reset.addEventListener("click", ()=>{
    board.forEach((cell) => {
        cell.innerHTML ="";
        msg.innerText = "";
        cell.disabled = false;
        turn = true;
    })
});

function winner() {
    const select = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];

    for (let pattern of select) {
        let p1 = board[pattern[0]].innerHTML;
        let p2 = board[pattern[1]].innerHTML;
        let p3 = board[pattern[2]].innerHTML;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 == p2 && p2 ==p3) {
                msg.innerText = `Winner is "${p1}"`; 
            }
            
        }
    }
}