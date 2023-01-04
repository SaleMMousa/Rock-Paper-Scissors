const computerChoice = document.getElementById("computerchoice");
const yourChoice = document.getElementById("playerschoice");
const resultGame = document.getElementById("result");
let btn = document.querySelectorAll("button");
let player;
let computer;
let result;

btn.forEach((btns) => {
    btns.addEventListener("click" , (e) => {
    if(e.target.id === "rock"){
        player = "✊"
    }
    if(e.target.id === "paper"){
        player = "✋"
    }
    if(e.target.id === "scissors"){
        player = "✌"
    }
    yourChoice.innerHTML = player;
    getRandom()
    getResult()
    })
    
})

function getRandom(){
    let randscomNum = Math.floor(Math.random() * 3 ) + 1;
    if(randscomNum === 1 ){
        computer = "✊"
    }
    if(randscomNum === 2 ){
        computer = "✋"
    }
    if(randscomNum === 3 ){
        computer = "✌"
    }
    computerChoice.innerHTML = computer;

}
function getResult(){
    if(player === computer){
        result = "Draw⏳"
    }
    if(player === "✊" && computer === "✋"){
        result = "You Lost😓"
    }
    if(player === "✊" && computer === "✌"){
        result = "You Win🎉"
    }
    if(player === "✋" && computer === "✌"){
        result = "You Lost😓"
    }
    if(player === "✋" && computer === "✊"){
        result = "You Win🎉"
    }
    if(player === "✌" && computer === "✊"){
        result = "You Lost😓"
    }
    if(player === "✌" && computer === "✋"){
        result = "You Win🎉"
    }
    resultGame.innerHTML = result; 
}

