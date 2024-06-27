const container = document.querySelector(".container");


const createDiv = () => {
  const div = document.createElement("div");
  div.classList.add("grid-item");
  container.appendChild(div);
  document.addEventListener("mouseover", (e) => {    
    if (e.target === div) {
      div.style.backgroundColor = "red";
    }
  });
}

const createGrid = () => {
  const count = 16 ** 2;
  for (let i = 0; i < count; i++) {
    createDiv();
  }
  
}

// createGrid();

document.addEventListener("load", createGrid());




