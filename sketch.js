const container = document.getElementById("container");
container.style.display = "flex"
container.style.flexWrap = "wrap"


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

container.querySelectorAll(".square").forEach(element => addEventListener("mouseover",hover))

function hover(){
    container.querySelectorAll(".square").forEach(element => element.style.backgroundColor = "yellow");
    
}





