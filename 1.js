let guesses;

let guessNumber;

let correctNumber;


 window.onload= ()=>{
    initGame();
    document.getElementById('number-submit').addEventListener('click',playGame);
    document.getElementById('restart-game').addEventListener('click',initGame);
 }

const initGame=()=>{
    correctNumber=getRandomNumber(); //get random number
    guesses=[];                    // number of times user guessed
    displayHistory();
    resetResult();
}

const playGame= ()=>{
    guessNumber=document.getElementById('number-guess').value;
    compareResult(guessNumber,correctNumber);
    saveGuessHistory(guessNumber);
    displayHistory();
    document.getElementById("number-guess").value='';
}
// section 2 : check input and display to screen
const compareResult = (guessNumber,correctNumber)=>{
    if(guessNumber > correctNumber){
        guessGreaterThanAns();
    } else if(guessNumber < correctNumber){
        guessLessThanAns();
    }else{
        guessCorrected();
    }
}

const guessGreaterThanAns=()=>{
    var text='Your guess is too hight !!!';
    var dialog="<div class='alert alert-warning' role='alert' >"+text+"</div>";
    document.getElementById('result').innerHTML=dialog
}
const guessLessThanAns=()=>{
    var text='Your guees is too low !!!';
    var dialog="<div class='alert alert-warning' role='alert' >"+text+"</div>";
    document.getElementById('result').innerHTML=dialog
}
const guessCorrected=()=>{
     var text='Your guesss is right !!!';
    var dialog="<div class='alert alert-success' role='alert' >"+text+"</div>";
    document.getElementById('result').innerHTML=dialog
}

// end section 2

//section 3 : save input to history and display to screen

const displayHistory=()=>{
    let index=guesses.length-1;
    let list="<ul class='list-group'>"
    while(index>=0){
        list+="<li class='list-group-item'>"+" Your last guess:"+guesses[index]+"</li>"
        index -=1;
    }
    list += "</ul>"
    document.getElementById('history').innerHTML=list;
}

const saveGuessHistory=(guess)=>{
    guesses.push(guess);
}
// end section3 

// section 4: reset Result content
const resetResult=()=>{
    document.getElementById('result').innerHTML='';
}
const getRandomNumber=()=>{
    return Math.floor(Math.random()*100+1); // generate random number from 1-100
}
