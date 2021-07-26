
<script>
         var turn = document.getElementById("turn"),
       
// boxes all boxes 
// X_or_O to set X or  into the box 

         boxes = documnet.querySelwctorAll("#main div"), X_or_O = 0;


        function selectWinnerBoxes(b1, b2, b3){
             b1.classsList.add("win");
             b2.classsList.add("win");
             b3.classsList.add("win");
             turn.innerHTML = b1.innerHTML + "Won Congrats";
             turn.style.fontSize = "40px";
            
        }

        function getWinner(){
             van box1 = document.getElementById("box1");
             van box2 = document.getElementById("box2")
             van box3 = document.getElementById("box3")
             van box4 = document.getElementById("box4")
             van box5 = document.getElementById("box5")
             van box6 = document.getElementById("box6")
             van box7 = document.getElementById("box7")
             van box8 = document.getElementById("box8")
             van box9 = document.getElementById("box9")

// get all possibilities    
                      
        if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1,innerHTML === box3.innerHTML)
             selectWinnerBoxes(box1,box2,box3);

        if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4,innerHTML === box6.innerHTML)
             selectWinnerBoxes(box4,box5,box6);

        if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7,innerHTML === box9.innerHTML)
             selectWinnerBoxes(box7,box8,box9);

        if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1,innerHTML === box7.innerHTML)
             selectWinnerBoxes(box1,box4,box7);

        if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2,innerHTML === box8.innerHTML)
             selectWinnerBoxes(box2,box5,box8);

        if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3,innerHTML === box9.innerHTML)
             selectWinnerBoxes(box3,box6,box9);

        if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1,innerHTML === box9.innerHTML)
             selectWinnerBoxes(box1,box5,box9);

        if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3,innerHTML === box7.innerHTML)
             selectWinnerBoxes(box3,box5,box7);   
        
        }

// set event onclick

        for(var i = 0; i < boxes.legth; i++){
             boxes [i].onclick = funtion()
             {

// not allow to change this value for this box

        if(this.innerHTML !== "X" && this.innerHTML !== "O"){
        if(X_or_O%2 === 0){
        console.log(X_or_O);
        this.innerHTML = "X";
        turn.innerHTML = "O Turn Now";
        getWinner ();
        X_or_O += 1;
        }eles
        {
        console.log(X_or_O);
        this.innerHTML = "O";
        turn.innerHTML = "X Turn Now";
        getWinner();
         X_or_O += 1;}
        }
  };

}

        function replay(){
        for(var i = 0; i < boxes.length; i++){
        boxes[i].classList.remove("win");
        boxes[i].classHTML = "";
        turn.innerHTML = "Play";
        turn.style.fontSize = "25px"
    }

function replay(){
    for(var i = 0; i < boxes.lenght; i++){
        boxes [i].class
    }
  }    
}

</script>
/* this is a exp loop 

let i = 1;
while (i <= 10 ) {
    console.log (i);
    i++;
}

*/

// save a value to  localSorge
// Delete your code and refresh the page 
// fetch your value from localStorage and log it out 