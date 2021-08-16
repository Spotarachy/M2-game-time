var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

var boxes = document.querySelectorAll(".box");

var turn = document.getElementById("turn");
var xWins = document.getElementById("x_wins");
var oWins = document.getElementById("o_wins");

var xTurn = false;
var xWinsCount = 0;
var oWinsCount = 0;

clearBoxes();

for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        // not allow to change this value for this box

        if (this.innerHTML !== '') {
            return;
        }

        this.innerHTML = xTurn === true ? "X" : "O";

        xTurn = !xTurn;

        updateTurnText();

        getWinner();
    };
}

function clearBoxes() {
    var boxLen = boxes.length;
    while (boxLen --) {
        boxes[boxLen].innerHTML = '';
        boxes[boxLen].classList.remove('win');
    }

    xTurn = Math.random() < 0.5;

    updateTurnText();
}

function updateTurnText() {
    turn.innerHTML = xTurn === true ? "X turn" : "O turn";
}

function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");

    turn.innerHTML = (xTurn === true ? "O" : "X") + " Won Congrats";

    if (xTurn) {
        xWinsCount ++;
    } else {
        oWinsCount ++;
    }

    updateWinCount();
}

function updateWinCount() {
    xWins.innerHTML = xWinsCount;
    oWins.innerHTML = oWinsCount;
}

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
}

document.getElementById("start").addEventListener("click", function () {
    clearBoxes();
});
