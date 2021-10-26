function createGridSquare()
{
    const gridSquare = document.createElement("div");
    gridSquare.classList.toggle("gridSquare");
    container.appendChild(gridSquare);
    gridSquare.addEventListener("mouseenter", () => {
        gridSquare.setAttribute("style", "background-color: black");
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

const container = document.querySelector(".container");

// Set initial grid size to be 16x16
setGridSize(16);