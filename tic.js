const boxes =Array.from(document.getElementsByClassName('box'));
const restartBtn = document.getElementById('restartBtn');

const playText = document.getElementById('playText');
const spaces = [];
const O_TEXT = "0";
const X_TEXT = "X";
let currentPlayer ;

//drawing our board
 function drawBoard(){
    boxes.forEach((box, index) =>{
        let styleString ='';
        if(index < 3){    //boxes at the top should have a bottom border
            styleString += `border-bottom: 3px solid var(--purple);`;
            styleString += `border-top: 3px solid var(--purple);`;
        }
        //if is clearly divisible by 3
        if(index % 3 === 0){  //boxes or element on the left should only have a right border
            styleString += `border-right: 3px solid var(--purple);`;
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if(index % 3 === 2){  //boxes or element on the right should only have a left border
            styleString += `border-left: 3px solid var(--purple);`;
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if(index > 5){  //boxes below should only have top border
            styleString += `border-top: 3px solid var(--purple);`;
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        box.style =styleString;  // activating the style string
        box.addEventListener('click', boxClicked)  //adding a listener to each of the boxes

    }); 
};

const boxClicked =(e) => {
    const id = e.target.id;  //getting the id of the box when the user clicks one of the box 
    if (!spaces[id]){        //if there no spaces in the id then we set it to the current player thus O_TEXT
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer; //the boxes display the the value or element of the currentplayer;  it can be either X or O

        if(playerHasWon()){   //if player has won then it changes the h1 text to O has won or X has won
            playText.innerText =`${currentPlayer} has won!`;
            return;
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;  //fliping the X and O; when o come first the second should be X then O then X again
    }
    
};
//player has won function; showing the logic of the winning
function playerHasWon() {
    //if the current player start from the 0 index(top left corner) and  current player on index 1 and 2 current player has won on top
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} wins up top.`)
            return true;
        }
        //if the current player start from index 0 and  current player on index 3 and 6, current player has won the left
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins up left.`)
            return true;
        }
        //if the current player start from index 0 and current player on index 4 and 8, current plyer has won diagonally
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} wins up diagonally.`)
            return true;
        }
    //if current player start from index 8(bottom right corner) and  current player on index 2 and 5, current player has won the right    
    }if(spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins on the right.`)
            return true;
        }
        //if current player start index 8 and current player on index 6 and 7, current player wins on the bottom
        if(spaces[6] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins on the bottom.`)
            return true;
        }
    //if current player start from index 4(from the middle) and current player on index 1 and 7, current player wins wertically    
    } if(spaces[4] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins vertically.`)
            return true;
        }
        //if current player start from index 4 and current player on index 3 and 5, currentplayer wins horizontaly
        if(spaces[3] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins horizontally.`)
            return true;
        }
     // if current player start from index 2(top right corner) and current player on index 4 and 6, currentplayer wins diagolly   
    }if (spaces[2] === currentPlayer){
        if (spaces[4] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins diagonaly`)
            return true;
        }
    }
}

//the restart function
function restart() {  //when the restart button is clicked
    spaces.forEach((space, index) => { //for each of the spaces should be null again when the restart btn is clicked
        spaces[index] = null;
    });
    boxes.forEach((box) => {    //and for each boxes should also be empty; thus clear everything on the box when thw restart btn is clicked
        box.innerText = '';
    });
    playText.innerText = `let's Play`; //also changing currentplayer has won to lets play again
    currentPlayer = O_TEXT;   //it set the current player to O
}
restartBtn.addEventListener('click', restart); //to call the restart function when the restart button is clicked

restart()
drawBoard();