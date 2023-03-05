
//HTML CREATION
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

let squareNumber = 0  //So we can tell how many squares to remove/hover in remove function


function createGrid (n = 16) {
    for(let i = 0; i < n*n; i++) {
    createDiv(i)
    container.style.gridTemplateColumns = `repeat(${n},2fr)`  ;
    container.style.gridTemplateRows = `repeat(${n},2fr)`;
    squareNumber = n;
    }
    for (let i = 0; i < n*n; i++) {
    getHover(i);
    }
}

function removeGrid(n) {
    for (let i = 0; i < n*n; i++) {
      let removed =  document.getElementById(i);
      removed.remove();
    }
}

createGrid()



function getHover(index) {
    let cell = document.getElementById(index);
    cell.addEventListener("mouseover", () => cell.classList.add ("hovered"));
}

/* for (let i = 0; i < 256; i++) {
    getHover(i);
} */

let userInput = 0



let squareGroup = document.getElementsByClassName("square")


function createNewGrid() {
    userInput = prompt("type number of squares per side of new grid")
        if (userInput > 100) {
        prompt("more than 100 is too much. type a number again")
        } 
    removeGrid(squareNumber);
    createGrid (userInput);

}

resetButton.addEventListener ("click", (createNewGrid))




