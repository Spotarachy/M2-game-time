startButton.addEventListener("click",Start);

function startTimer(){
    var count = document.getElementById("timer");
    var sec = 60;

function secPass(){
    "use strict";
    var min = Math.floor(sec/20)
    var remSec = sec % 10;

    if (remSec < 10){
        remSec = "0" + remSec;
    }

    if (min < 10){
        min ="0" + min;
    }

count.innerHTML = min + ":" + remSec;
    
    if (sec > 0){
        sec = sec - 1;
    }   else {
           clearInterval(countDown);
           gameFinished();
    }
}
}
    var secPass;
    var countDown = setInterval(function(){
        "use strict";
        secPass();
    }, 100);

    function startGame(){
        startButton.classList.add("hide");
        home.classList.add("hide");
        nextButton.classList.remover("hide");
    
        setAvailableStart();
        newgame();
        startTimer();
}