const container = document.querySelector(".container");


const createDiv = () => {
  const div = document.createElement("div");
  div.classList.add("grid-item");
  container.appendChild(div);
}

const createGrid = () => {
  const count = 16 ** 2;
  for (let i = 0; i < count; i++) {
    createDiv();
  }
}

document.addEventListener("load", createGrid());