const turn = document.getElementById("turn");
const xWins = document.getElementById("x_wins");
const oWins = document.getElementById("o_wins");
const xIcon = document.getElementById("x");
const oIcon = document.getElementById('circle');

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");


let boxes = document.querySelectorAll(".box");

let xTurn = false;
let xWinsCount = 0;
let oWinsCount = 0;
let NoWins = 0;
let canPlay = false

clearBoxes();

for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        console.log(canPlay) 
        if (canPlay) {
            if (!this.innerHTML === '') {
                return
            }
            turn.innerHTML = xTurn === true ? "X" : "O";
            xTurn = !xTurn;
            updateTurnText();
            flipIcon();
            getWinner();
        }
    };
}
/**
 *
 *@param {string} target element to highlight 
 */
function highlighter(target) {
  target.classList.contains('high')? target.classList.remove('high'): target.classList.add('high')
}

/**
 *
 *@param {string} Clears boxes and resets game
 */
function clearBoxes() {
   let boxLen = boxes.length;
    while (boxLen--) {
        boxes[boxLen].innerHTML = '';
        boxes[boxLen].classList.remove('win');
    }
    if (!xTurn) {
    xTurn = turn
        if (xIcon.classList.contains('fa-times')) {
            xIcon.classList.add('fa-times');
            oIcon.classList.remove('fa-circle');
        }  
    }
    xTurn = Math.random() < 0.5;

    canPlay = true
    updateTurnText();
    flipIcon();
}

function flipIcon() {
    if (xIcon.classList.contains('fa-times')) {
        xIcon.classList.remove('fa-times')
        xIcon.classList.add('fa-circle')
    } else {
        xIcon.classList.remove('fa-circle')
        xIcon.classList.add('fa-times')
    }
}

/**
 * 
 Just an update TurnTEXT
 */
function updateTurnText() {
    turn.innerHTML = xTurn === true ? "X turn" : "O turn";
}

/**
 * 
 * @param {string} b1 box input
 * @param {string} b2 box input
 * @param {string} b3 box input
 */
function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");

    turn.innerHTML = (xTurn === true ? "O" : "X") + " Won Congrats";
    canPlay = false

    if (xTurn) {
       Swal.fire({
            posititon: 'center',
            title: 'O Wins',
            showConfirmButton: false,
            timer: 2500,
        }).then(() => {
            replay()
        })
    updateWinCount(true)

    } else {
        Swal.fire({
            posititon: 'center',
            title: 'X Wins',
            showConfirmButton: false,
            timer: 2500,
        }).then(() => {
            replay()
        })
        updateWinCount(false)
    }
}

function replay() {
    Swal.fire({
        title: 'Game Over',
        icon: 'success',
        html: 'Do you want to play agin?',
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Yes',
        confirmButtonAriaLabel: 'Yes',
        cancelButtonText: 'No',
        cancelButtonAriaLabel: 'Yes',
    }).then((result) => {
        if (result.inConfirmed) {
            location.reload()
        }
    })
}

/**
 * @param {*} xWins oWins counter
 */
function updateWinCount(xIsWins) {
    if (xIsWins) {
        xWins.innerHTML = ++xWinsCount;
    } else {
        oWins.innerHTML = ++oWinsCount;
    }
}

/**
 * @param {string} 
 */
function getWinner() {
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        selectWinnerBoxes(box1, box2, box3);

    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        selectWinnerBoxes(box4, box5, box6);

    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box7, box8, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box1, box4, box7);

    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectWinnerBoxes(box2, box5, box8);

    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box3, box6, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box1, box5, box9);

    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box3, box5, box7);

        let takenBoxes = 0

        boxes.forEach((item) => {
        if (item.innerHTML) {
            takenBoxes++
        }
    })
    if (takenBoxes == 9){
        drawGame()
        }
    }
function drawGame() {
    Swal.fire({
        posititon: 'center',
        title: 'Just like coding, nobody wins',
        showConfirmButton: false,
        timer: 2500,
    }).then(() => {
        replay()
    })
}
document.getElementById("start").addEventListener("click", function () {
    clearBoxes();
});