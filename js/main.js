// TODO: Write JavaScript code here! e.g. to test:
// console.log('Individual Project 1, ready to start!');

console.log('LETS GOOOO');

var incorrectCount = 0;
var livesCount = 10;
var correctCount = 0;

function incorrect() {
    console.log('That Answer is incorrect Playaaa');
    incorrectCount = ++incorrectCount;
    console.log(incorrectCount);
    document.querySelector('#incorrect_count').innerHTML= incorrectCount;
    console.log('You just lost a life...');
    livesCount = --livesCount;
    document.querySelector('#lives_count').innerHTML= livesCount;
    document.querySelector('#message').innerHTML= 'Incorrect! You Lose a life.';
    if(livesCount === 0) {
        console.log('You are TOAST!');
        document.querySelector('#all_questions').innerHTML='<h1 class="gameover">GAME OVER!</h1>';
        
    }
    
}

function correct() {
    console.log('THAT ISSS CORRECT!!');
    correctCount = ++correctCount;
    console.log(correctCount);
    document.querySelector('#correct_count').innerHTML= correctCount;
    
    if(correctCount === 5) {
        console.log('Yes!');
        document.querySelector('#all_questions').innerHTML= '<h1 class="gameover">YOU WIN!</h1>';
    }
    
}



// Didn't use the below code attempts
//document.querySelector('#punch_line').innerHTML='GAME OVER!';
// const newHeading = document.createElement("h1");
// newHeading.classList.add("gamover");
// newHeading.textContent = "GAME OVER!";
// document.body.appendChild(newHeading);