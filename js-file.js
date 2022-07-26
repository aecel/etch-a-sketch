removeChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

makeCanvas = (num) => {

    for (i = 0; i < (num * num); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', darkenSquare);
        canvas.appendChild(square);
    }

    canvas.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}

darkenSquare = (e) => {
    e.target.style.backgroundColor = 'black';
}

changeCanvas = (e) => {
    removeChildren(canvas);
    makeCanvas(input.value);
    console.log(`${input.value} is a ${typeof input.value}`);
}

// Initial canvas, not working
// makeFirstCanvas = () => {
//     let executed = false;
//     return function () {
//         if (!executed) {
//             executed = true;
//             makeCanvas(16);
//         }
//     };
// }

const canvas = document.getElementById("canvas");
const button = document.getElementById("submit");
const input = document.getElementById("input");
button.addEventListener('click', changeCanvas);

// makeFirstCanvas();