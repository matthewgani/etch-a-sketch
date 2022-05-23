const maincontainer = document.querySelector('.main-container');
const title = document.querySelector('h1');

createGrid(16);

const changeGridBtn = document.querySelector('.changeGrid');
const clearGridBtn = document.querySelector('.clearGrid');
const eraseBtn = document.querySelector('.erase');
const normalBtn = document.querySelector('.normal'); 

let color = 'black';

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


eraseBtn.addEventListener('click', ()=> {
    color = 'white';
})

normalBtn.addEventListener('click', () => {
    color = 'black';
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
    const grids = document.querySelectorAll('.grid');
    // console.log(grids);
    // should remove the previous event listener here...
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', changeColor);
    })

}
function resetGrid(){
    const rows = document.querySelectorAll('.rowContainer');
    rows.forEach((row) => {
        maincontainer.removeChild(row);
    })
}

// better way to do this would be to setup the listener once when creating the grid,
// the function when setting the listener would then use a global variable to decide the color to change the grid to
// results in only 1 event listener for each grid


// function changeGridColors(color) {
//     const grids = document.querySelectorAll('.grid');
//     // console.log(grids);
//     // should remove the previous event listener here...
//     grids.forEach((grid) => {
//         grid.addEventListener('mouseover', ()=> {
//             grid.style.backgroundColor = color;
//         })
//     })
// }

// learned from one of the top odin in etch a sketch
function changeColor(e) {
    // e.target is the object that triggered the event
    e.target.style.backgroundColor = color;
}

