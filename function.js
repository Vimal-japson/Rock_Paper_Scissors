
const choices = ["Rock","Paper","Scissors"];
const res = document.getElementById("res");
const player  = document.getElementById("player1");
const computer  = document.getElementById("computer");
const Sc1 = document.getElementById("player1Sc");
const Sc2 = document.getElementById("computerSc");

let Scorep = 0;
let ScoreC = 0;

function playgame(PlayerChoice){
    ComputerChoice = choices[Math.floor(Math.random()*3)];

    if(ComputerChoice == PlayerChoice){
        result = "Its a tie...";
        Scorep++;
        ScoreC++;
        res.classList.add("tie")
    }

    else{
        switch (PlayerChoice){
            case "Rock":
               if(ComputerChoice == "Scissors"){
                result = "You win";
                Scorep++;
                res.classList.remove("tie");
                res.classList.remove("lose");
                res.classList.add("win");
               }
               else{
                result = "You Lose...";
                ScoreC++;
                res.classList.remove("tie");
                res.classList.remove("win");
                res.classList.add("lose");
               }
               break;
            case "Paper":
                if(ComputerChoice == "Rock"){
                    result = "You win...";
                    Scorep++;
                    res.classList.remove("tie");
                    res.classList.remove("lose");
                    res.classList.add("win");
                   }
                   else{
                    result = "You Lose...";
                    ScoreC++;
                    res.classList.remove("tie");
                res.classList.remove("win");
                    res.classList.add("lose");
                   }
                break;
            case "Scissors":
                if(ComputerChoice == "Paper"){
                    result = "You win...";
                    Scorep++;
                    res.classList.remove("tie");
                res.classList.remove("lose");
                    res.classList.add("win");
                   }
                   else{
                    result = "You Lose...";
                    ScoreC++;
                    res.classList.remove("tie");
                    res.classList.remove("win");
                    res.classList.add("lose");
                   }
                 break;
        }
    }
    player.textContent = "You: "+ PlayerChoice;
    computer.textContent = "Computer: "+ComputerChoice;
    res.textContent = result;
    Sc1.textContent = "Your Score: "+Scorep;
    Sc2.textContent = "Computer Score: "+ScoreC;
}
