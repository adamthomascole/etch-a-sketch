const gameContainer = document.querySelector("#gameContainer");
const gameDiv = document.querySelector(".gameDiv");
let divArray = [];

function getRandomColor() {
    const characters = '0123456789ABCDEF';
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    };

    return color;
};

function changeColor() {
    let div = document.querySelector('.gameDiv')
    const randomColor = getRandomColor();

    event.target.style.backgroundColor = randomColor;
}

function buildDivArray(divNum) {
    gameContainer.innerHTML = ""; 
    
    const width = 896;
    const gapSize = 4;
    const singleSide = (width / divNum);
    const divSize = Math.floor(singleSide-gapSize)
    console.log(divSize);

    for (let i = 0; i < divNum**2; i++) {
        console.log(i);
        divArray[`div${i}`] = document.createElement("div");
        let newDiv = divArray[`div${i}`];

        divArray.push(newDiv);

        newDiv.classList.add('gameDiv');
        newDiv.style.width = divSize.toString() + "px";
        newDiv.style.height = divSize.toString() + "px";
        newDiv.style.backgroundColor = 'grey';

        let gapNum = gapSize.toString();
        let gapStr = gapNum + "px"

        gameContainer.style.gap = gapStr
        gameContainer.appendChild(divArray[`div${i}`]);
    };

    for (const square of divArray) {
        square.addEventListener('mouseover', changeColor);
    };

    gameContainer.style.width = `${width}px`
};

function newGrid() {
    let input = prompt("How many squares wide and tall should your new grid be?", "16")
    let inputNum = Number(input);
    if (inputNum > 50) {
        alert("Maximum size of 50x50!");
    } else if (input !== null && input !== "") {
        gameContainer.innerHTML = ""; 
        divArray = [];
        buildDivArray(input);
    } else {
        let input = prompt("Invalid Input!\nHow many squares wide and tall should your new grid be?", "16")
        gameContainer.innerHTML = ""; 
        divArray = [];
        buildDivArray(input);
    };
};

buildDivArray(16);




