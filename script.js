const fr = document.getElementById("finalResult");
const userc = document.getElementById("userChoice");
const compc = document.getElementById("compChoice");
const reset = document.getElementById("resetIcon");
const uR = document.getElementById("userRock");
const uP = document.getElementById("userPaper");
const uS = document.getElementById("userScissors");


let uc = '';
let cc = '';
function userChoiceFunc(number){
    if(number === '1'){
        uc = "Rock";
        uR.classList.replace("fa-regular","fa-solid");
        uP.classList.replace("fa-solid","fa-regular");
    }
    else if(number === '2'){
        uc = "Paper";
        uP.classList.replace("fa-regular","fa-solid");
        uR.classList.replace("fa-solid","fa-regular");
    }
    else if(number === '3'){
       uc = "Scissors";
    }
    else{
        return false;
    }
    computerChoiceFunc();
    console.log(uc);
    console.log(cc);


    if(uc === cc){
        console.log("draw");
        fr.textContent = "Draw!!!";
    }
    if(uc === "Rock" && cc === "Paper"){
        fr.textContent = "You Lost!!!";
    }
    if(uc === "Rock" && cc === "Sc"){
        fr.textContent = "You Won!!!";
    }
    if(uc === "Paper" && cc === "Rock"){
        fr.textContent = "You Won!!!";
    }
    if(uc === "Paper" && cc === "Sc"){
        fr.textContent = "You Lost!!!";
    }
    if(uc === "Sc" && cc === "Paper"){
        fr.textContent = "You Won!!!";
    }
    if(uc === "Sc" && cc === "Rock"){
        fr.textContent = "You Lost!!!";
    }

    userc.textContent = `Your Choice = ${uc}`;
    compc.textContent = `Computer's Choice = ${cc}`;
}

function computerChoiceFunc(){
    let ccn = Math.floor(Math.random()*3);
    if(ccn === 0){
       cc = "Rock";
    }
    else if(ccn === 1){
        cc = "Paper";
    }
    else if(ccn === 2){
      cc = "Scissors";
    }
    else{
        return false;
    }
    // console.log(cc);

}

function resetting(){
    userc.textContent = "Your Choice = 0";
    compc.textContent = "Computer's Choice = 0";
    fr.textContent = "Result";
    uR.classList.replace("fa-solid","fa-regular");
    uP.classList.replace("fa-solid","fa-regular");
}
reset.addEventListener("click",resetting);
