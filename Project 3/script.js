var score = 10;
var high_score = 0;
var curr_score = 0;


var guessHis = [];

console.log(guessHis)


// const btn = document.querySelector('check-button');

// var button = document.querySelector('check-button')


var answer = Math.trunc(Math.random() * 100) + 1;
console.log(answer)



function reset() {
    answer = Math.trunc(Math.random() * 100) + 1;
    score = 10;
    document.getElementById("score").innerText = score;

    document.getElementById("high_score").innerText = high_score;

    guessHis = [];
    document.getElementById("history").innerHTML = "Guess History";

    document.getElementById("check-button").disabled = false;

    document.body.style.backgroundColor = "";
    document.getElementById("check-button").innerText = "Check";
    document.getElementById("check-button").style.background='';

    document.getElementById("hints").innerText = "Guess a number";

}


function checkNum() {
    let currNum = document.getElementById("input").value;
    if (currNum === '' || currNum < 0 || currNum > 100) {
        document.getElementById("hints").innerText = "You can only enter numbers between 1 and 100";
    }

    else if (guessHis.indexOf(currNum) !== -1) {
        document.getElementById("hints").innerText = "Repeated number";

    }



    else if (currNum < answer) {        
        hints(currNum)

        if (score == 0) {
            gameover(currNum)
        }
    }

    else if (currNum > answer) {
        hints(currNum)

        if (score == 0) {
            gameover(currNum)
        }
    }


    else if (currNum == answer) {
        win(currNum)
    }
}


function addHistory(currNum) {
    document.getElementById("history").innerHTML += "<br>" + currNum;
}

function hints (currNum){
    score--
    document.getElementById("score").innerText = score;

    guessHis.push(currNum)
    addHistory(currNum)


    if (currNum < answer) {
      document.getElementById("hints").innerText = "Your Guess is too Low!";
    }

    else {
        document.getElementById("hints").innerText = "Your Guess is too High!";

    }
}

function win(currNum) {
    document.getElementById("hints").innerText = `Congratulation! Your guess was correct. 
    ${currNum} is my secret number.`;

    curr_score = score

    high_score = Math.max(high_score,curr_score);

    guessHis.push(currNum)
    document.getElementById("high_score").innerText = high_score;
    console.log(guessHis)
    addHistory(currNum)


    document.getElementById("image").src = "win.jpeg";
    document.body.style.backgroundColor = "green";



    document.getElementById("check-button").disabled = true;


    document.getElementById("check-button").innerText = "Play agian" 
}


function gameover(currNum) {
    var score = 10;
    var guessHis = [];
    document.getElementById("image").src = "lose.jpeg";

    document.getElementById("hints").innerText = `Game Over! 
    ${currNum} is my secret number.`;
    
    document.getElementById("check-button").disabled = true;

    document.body.style.backgroundColor = "red";
    document.getElementById("check-button").innerText = "Try agian";
    document.getElementById("check-button").style.background='#B2BEB5';


}



// btn.addEventListener("click", checkNum);
