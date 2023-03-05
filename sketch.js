const container = document.getElementById("container");
const buttonContainer = document.createElement("div")
document.body.appendChild(buttonContainer)
buttonContainer.classList.add("buttonContainer")
const resetButton = document.createElement ("button")
buttonContainer.appendChild (resetButton)
resetButton.innerHTML = "RESET"


let grid

function createDiv(index) {
   grid = document.createElement("div")  
   container.appendChild(grid) 
   grid.classList.add("square")
   grid.setAttribute("id",index)
}    

function create16x16Grid () {
    for(let i = 0; i < 256; i++) {
    createDiv(i)
    }
}

create16x16Grid()

function getHover(index) {
    let cell = document.getElementById(index);
    cell.addEventListener("mouseover", () => cell.classList.add ("hovered"));
}

for (let i = 0; i < 256; i++) {
    getHover(i);
}

let userInput = ""


function getGridNumber() {
    userInput = prompt("type number of squares per side of new grid") 
    console.log(userInput)
}

resetButton.addEventListener ("click", (getGridNumber))




