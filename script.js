const mainPaper = document.querySelector(".paper");
const mainScissors = document.querySelector(".scissors");
const mainRock = document.querySelector(".rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const rules = document.querySelector(".rules");
const mainSection = document.querySelector(".rock-paper-scissors");
const gameSection = document.querySelector(".game-section");
const playerClick = mainSection.querySelectorAll(".player");
const sectionRock = document.querySelector(".rock-vs-ai");
const sectionPaper = document.querySelector(".paper-vs-ai");
const sectionScissors = document.querySelector(".scissors-vs-ai");
const randomAi = document.querySelector("#ai");
const result = document.querySelector(".result");
const scoreBoard = document.querySelector(".score");
const playAgain = document.querySelector(".play-again");
mainRock.style.cursor = "pointer";
mainPaper.style.cursor = "pointer";
mainScissors.style.cursor = "pointer";

// mainSection.addEventListener("click", e => {
//     if (e.target.classList.contains("rock")) {
//         mainSection.classList.add("hidden");
//         gameSection.classList.remove("hidden");
//         sectionRock.classList.remove("hidden");
//         playerSelected = "rock";
//     } else if (e.target.classList.contains("paper")) {
//         mainSection.classList.add("hidden");
//         gameSection.classList.remove("hidden");
//         sectionPaper.classList.remove("hidden");
//         playerSelected = "paper";
//     } else if (e.target.classList.contains("scissors")) {
//         mainSection.classList.add("hidden");
//         gameSection.classList.remove("hidden");
//         sectionScissors.classList.remove("hidden");
//         playerSelected = "scissors";
//     }
// });

playerClick.forEach(function(pClick) {
    pClick.addEventListener("click", function() {
        if (pClick.classList.contains("rock")) {
            mainSection.classList.add("hidden");
            gameSection.classList.remove("hidden");
            sectionRock.classList.remove("hidden");
            pClick.value = "rock";
        }
        if (pClick.classList.contains("paper")) {
            mainSection.classList.add("hidden");
            gameSection.classList.remove("hidden");
            sectionPaper.classList.remove("hidden");
            pClick.value = "paper";
        }
        if (pClick.classList.contains("scissors")) {
            mainSection.classList.add("hidden");
            gameSection.classList.remove("hidden");
            sectionScissors.classList.remove("hidden");
            pClick.value = "scissors";
        }

        const playerSelected = pClick.value;
        const aiSelected = getAi();
        console.log(playerSelected);
        console.log(aiSelected);

        const resultGame = rulesGame(playerSelected, aiSelected);
        console.log(resultGame);
        rollAi();
        setTimeout(function() {
            randomAi.setAttribute("src", `./img/${aiSelected}.svg`);
        }, 1000);

        setTimeout(function() {
            gameSection.classList.replace("w-[678px]", "w-[966px]");
            result.classList.remove("hidden");
            result.querySelector("span").innerHTML = resultGame;
            getScore(resultGame);
        }, 1500);
    });
});

function rollAi() {
    const roll = ["rock", "paper", "scissors"];
    let i = 0;
    const startTime = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - startTime > 1000) {
            clearInterval;
            return;
        }

        randomAi.setAttribute("src", `./img/${roll[i++]}.svg`);
        randomAi.setAttribute("class", `h-[300] w-[300px] mx-auto mt-[61px]`);
        if (i == roll.length) return (i = 0);
    }, 100);
}

function getAi() {
    const ai = Math.floor(Math.random() * 3) + 1;
    if (ai == 1) return "rock";
    if (ai == 2) return "paper";
    if (ai == 3) return "scissors";
}

function rulesGame(player, ai) {
    if (player == ai) return "DRAW";
    if (player == "rock") return ai == "scissors" ? "YOU WIN" : "YOU LOSE";
    if (player == "paper") return ai == "rock" ? "YOU WIN" : "YOU LOSE";
    if (player == "scissors") return ai == "paper" ? "YOU WIN" : "YOU LOSE";
}

let scorePlayer = 0;

function getScore(resultGame) {
    // if (hasil == "SERI!")(sPlayer = sPlayer), (sKomputer = sKomputer);
    if (resultGame == "YOU WIN") scorePlayer += 1;
    scoreBoard.innerHTML = scorePlayer;
}

playAgain.addEventListener("click", function() {
    mainSection.classList.remove("hidden");
    gameSection.classList.add("hidden");
    result.classList.add("hidden");
    sectionRock.classList.add("hidden");
    sectionPaper.classList.add("hidden");
    sectionScissors.classList.add("hidden");
    gameSection.classList.replace("w-[966px]", "w-[678px]");
});