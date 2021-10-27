function createGridSquare()
{
    const gridSquare = document.createElement("div");
    gridSquare.classList.toggle("gridSquare");
    container.appendChild(gridSquare);
    gridSquare.addEventListener("mouseenter", () => 
    {
        if (gridColor === "BLACK")
            gridSquare.setAttribute("style", "background-color: black");
        else
            gridSquare.setAttribute("style", `background-color: rgb(${randomRBGNum()}, ${randomRBGNum()}, ${randomRBGNum()})`);
    });
}

function createGrid(numOfSquares)
{
    for (let i = 0; i < numOfSquares*numOfSquares; i++)
        createGridSquare();
}

function setGridSize(numOfSquares)
{
    removeAllGridSquares();
    let gridSize = 960 / numOfSquares;
    let itemStr = "";
    for (let i = 0; i < numOfSquares; i++)
        itemStr += gridSize + "px ";
    container.setAttribute("style", `grid-template-rows: ${itemStr}; grid-template-columns: ${itemStr};`);
    createGrid(numOfSquares);
}

function removeAllGridSquares()
{
    while(container.firstChild)
        container.removeChild(container.firstChild);
}

function reset()
{
    let gridSquares = document.querySelectorAll(".gridSquare");
    gridSquares.forEach(gridSquare => {
        gridSquare.style.removeProperty("background-color");
    });
}

let randomRBGNum = () => Math.floor(Math.random() * (255 + 1));

// default mouseover color
let gridColor = "BLACK";
const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", () => 
{
    if (button.id === "black")
        gridColor = "BLACK";
    if (button.id === "rainbow")
        gridColor = "RAINBOW";
    if (button.id === "setsize")
    {
        let size = parseInt(prompt("Enter a number between 1 - 100 to set the grid size (ex. 16 would set the grid to be 16x16"));
        if (size < 1 || size > 100 || isNaN(size))
            alert("Error: Number must be between 1-100");
        else
            setGridSize(size);
    }
    if (button.id === "reset")
        reset();
}))

// Set initial grid size to be 16x16
setGridSize(16);