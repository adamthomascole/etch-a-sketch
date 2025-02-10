const gameContainer = document.querySelector("#gameContainer");
const divArray = {}

function buildDivArray(divNum) {
    for (let i = 0; i <= divNum**2; i++) {
        divArray[`div${i}`] = document.createElement("div");
        document.body.appendChild(gameContainer);
    };
};