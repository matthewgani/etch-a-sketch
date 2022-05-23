const maincontainer = document.querySelector('.main-container');
const title = document.querySelector('h1');

createGrid(16);

const changeGridBtn = document.querySelector('.changeGrid');
const clearGridBtn = document.querySelector('.clearGrid');
const rainbowBtn = document.querySelector('.rainbow');
const normalBtn = document.querySelector('.normal');
const eraseBtn = document.querySelector('.erase');

changeGridBtn.addEventListener('click', () => {
    result = prompt('What resolution do you want? The higher, the smaller the individual squares.');
    count = parseInt(result);
    if (isNaN(count) || count > 100) {
        alert('Resolution is too high (>100) or you did not enter a valid number!');
    }
    else {
        resetGrid();
        createGrid(result);

    }

})

clearGridBtn.addEventListener('click', ()=> {
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
        grid.style.backgroundColor = 'white';
    })

})

normalBtn.addEventListener('click', ()=> {
    changeGridColors('black');
})

eraseBtn.addEventListener('click', ()=> {
    changeGridColors('white');
})



function createGrid(count) {
    title.textContent = 'Etch a sketch!' + ' ' + count + " X " + count;

    for (let i = 0; i < count; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.style.display = 'flex';
        rowContainer.classList.add('rowContainer');
        // rowContainer.style.width = '960px';
        // rowContainer.style.border = '1px solid blue';
        rowContainer.style.flex = '1';
        // rowContainer.innerHTML = 'hi';
        maincontainer.appendChild(rowContainer);

        for (let j = 0; j < count; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            // grid.innerHTML = 'hi';
            // grid.style.padding = '5px';
            // grid.style.margin = '5px';
            // grid.style.width = '50px';
            grid.style.flex = '1';
            // grid.style.border = '1px solid black';
            rowContainer.appendChild(grid);
        }
    }
    changeGridColors('black');

}
function resetGrid(){
    const rows = document.querySelectorAll('.rowContainer');
    rows.forEach((row) => {
        maincontainer.removeChild(row);
    })
}

function changeGridColors(color) {
    const grids = document.querySelectorAll('.grid');
    // console.log(grids);
    // should remove the previous event listener here...
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', ()=> {
            grid.style.backgroundColor = color;
        })
    })
}

