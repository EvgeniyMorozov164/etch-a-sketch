const container = document.querySelector(".container");
const gridSize = document.querySelector("button");

let size = 16;

const getRandomNumber = () => {
  const number = Math.floor(Math.random() * 255);
  return number;
}

const getBackgroundColor = () => {
  const backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
  console.log(backgroundColor);
  return backgroundColor;
}


const createDiv = () => {  
  const div = document.createElement("div");
  div.classList.add("grid-item");
  div.style.width = `calc(960px / ${size})`;
  div.style.height = `calc(960px / ${size})`; 
  // div.style.backgroundColor = bColor;
  container.appendChild(div);
  document.addEventListener("mouseover", (e) => {    
    if (e.target === div) {
      div.style.backgroundColor = getBackgroundColor();
    };
  });
}

const createGrid = () => {
  const count = size ** 2;
  for (let i = 0; i < count; i++) {
    createDiv();
  }  
}


document.addEventListener("load", createGrid());




