const container = document.querySelector(".container");
const gridSize = document.querySelector("button");
const body = document.querySelector("body");

let size = 16;

const getRandomNumber = () => {
  const number = Math.floor(Math.random() * 255);
  return number;
}

const getBackgroundColor = () => {
  const backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;  
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

const clearGrid = () => {
  body.removeChild(body.children[1]);
}

const createUserGrid = () => {
  const div = document.createElement("div");
  div.classList.add("container");
  body.insertBefore(div, document.querySelector("script"));
  const count = size ** 2;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("div");
    item.classList.add("grid-item");
    item.style.width = `calc(960px / ${size})`;
    item.style.height = `calc(960px / ${size})`; 
    div.appendChild(item);
    document.addEventListener("mouseover", (e) => {    
      if (e.target === item) {
        item.style.backgroundColor = getBackgroundColor();
      };
    });
  };   
}

gridSize.addEventListener("click", () => {
  size = prompt("Enter grid size (min: 16; max: 100)", "");
  if (size < 16) {
    size = 16;
  }
  if (size > 100) {
    size = 100;
  }
  clearGrid();
  createUserGrid();  
});

document.addEventListener("load", createGrid());




