let choises = document.querySelectorAll(".choise");

let msg = document.querySelector("#msg");

let body = document.querySelector("body");

let userCount = 0;
let compCount = 0;

const win = (userId, compId) => {
    msg.innerText = `${userId} beat the ${compId}.You Win`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
    body.style.backgroundColor = "rgb(47, 126, 87)";

    userCount++;

    let userScore = document.querySelector("#user-score1");
    userScore.innerText = `${userCount}`;
};

const lose = (userId, compId) => {
    msg.innerText = `${compId} beat the ${userId}.You Lose`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    body.style.backgroundColor = "rgb(204, 111, 111)";
    compCount++;

    let compScore = document.querySelector("#comp-score1");
    compScore.innerText = `${compCount}`;
};

const playGame = (userId, compId) => {
    if (userId === compId) {
        console.log("game is draw");
        msg.innerText = `Draw the match play again`;
        msg.style.backgroundColor = "pink";
        msg.style.color = "green";
        body.style.backgroundColor = "white";
    } else {
        if (userId === "Rock") {
            console.log(
                compId === "Scisors" ? win(userId, compId) : lose(userId, compId)
            );
        } else if (userId === "Paper") {
            console.log(
                compId === "Rock" ? win(userId, compId) : lose(userId, compId)
            );
        } else if (userId === "Scisors") {
            console.log(
                compId === "Paper" ? win(userId, compId) : lose(userId, compId)
            );
        }
    }
};

const compId = (userId) => {
    let comp = ["Rock", "Paper", "Scisors"];
    let compId = Math.floor(Math.random() * 3);
    console.log("user id ", userId);
    console.log("computer id ", comp[compId]);

    playGame(userId, comp[compId]);
};

choises.forEach((choise) => {
    choise.addEventListener("click", () => {
        let userId = choise.getAttribute("id");
        console.log("button is clicked ");
        compId(userId);
    });
});
