const gameContainer = document.querySelector("#gameContainer");
const gameDiv = document.querySelector(".gameDiv");
const divArray = [];

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
    for (let i = 0; i < divNum**2; i++) {
        divArray[`div${i}`] = document.createElement("div");
        let newDiv = divArray[`div${i}`];

        divArray.push(newDiv);

        newDiv.classList.add('gameDiv');
        newDiv.style.width = '24px';
        newDiv.style.height = '24px';
        newDiv.style.backgroundColor = 'black';

        gameContainer.appendChild(divArray[`div${i}`]);
    };

    for (const square of divArray) {
        //square.style.margin = '12px';
        square.addEventListener('mouseover', changeColor);
        console.log(square);
    }
    
};

console.log(divArray)
buildDivArray(16);