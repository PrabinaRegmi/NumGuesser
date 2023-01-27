/* Game rules
- Players must guess a number between a min and max
-Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
-Let player choose to play again
*/

//Set values
let min=1,
    max= 5,
    winningNum= getRandomNum(min, max),
    guessLeft=4;

// UI variables
const game= document.querySelector("#game"),
      minNum= document.querySelector(".min-num"),
      maxNum= document.querySelector(".max-num"),
      guessInput=document.querySelector("#guess-input"),
      guessBtn= document.querySelector("#guess-btn"),
      message= document.querySelector(".message");

//Assign min and max
minNum.textContent=min;
maxNum.textContent= max;

//Adding event listner
game.addEventListener('mousedown', function(e){
    if(e.target.className==="play-again"){
        window.location.reload();
    }
 
});


//Listen for guess(submit)
guessBtn.addEventListener("click", function(){
    let guess = parseInt(guessInput.value);
    

//Validate the entered number
if(isNaN(guess) || guess<min || guess>max){
    //Incorrect guess but will continue
    //Call setMessage function
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}else{ 
    //check if won
if (guess===winningNum){
    //Calling a function inorder to make code organised
    gameOver(true, `Congratulations!! ${guess} is winning number.`);
    // //make input holder disabled so that new value can't be entered
    // guessInput.disabled=true;
    // //Change border color
    // guessInput.style.borderColor="green";
    // //Set winning message (Call for setMessage function)
    // setMessage(`Congratulations!! ${guess} is winning number.`, 'green');
    //  //Play again
    //  guessBtn.value="Play Again";
    //  //Adding class name to btn so that we can carry out event delegation
    //  guessBtn.className += "play-again";
}else{
     //Wrong guess
     guessLeft -= 1;

     if(guessLeft === 0){
        //calling a function to make code organised and neater
        gameOver(false, `You lost!! The winning number was ${winningNum}.`)

        // //Game Over- Lost
        // guessInput.style.borderColor="red";
        // guessInput.disabled= true;
        // setMessage(`You lost!! The winning number was ${winningNum}.`, 'red');
        //  //Play again
        // guessBtn.value="Play Again";
        // //Adding class name to btn so that we can carry out event delegation
        // guessBtn.className += "play-again";

     }else{
        guessInput.value= " ";
        setMessage(`Its wrong guess!! ${guessLeft} guesses left.`,'red');

     }
}

}


});

// //Game Over function
function gameOver(won, msg){
    let color;
    won === true ? color="green": color="red";
    //Disable input
    guessInput.disabled= true;
    //Change border color
    guessInput.style.borderColor= color;
    //Set text color
    message.style.color= color;
    //Set message function
    setMessage(msg);
    //Play again
    guessBtn.value="Play Again";
    //Adding class name to btn so that we can carry out event delegation
    guessBtn.className += "play-again";

    

}

//Get Winning number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//SetMessage function
function setMessage(msg,color){
    message.style.color= color;
    message.textContent=msg;
    
}
