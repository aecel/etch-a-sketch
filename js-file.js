const removeChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let isDown = false
document.addEventListener("mouseup", () => {
    isDown = false
});

const makeCanvas = (num) => {

    for (i = 0; i < (num * num); i++) {
        const square = document.createElement('div');
        square.draggable = false
        square.classList.add('square');
        square.addEventListener('mousedown', (e) => {
            isDown = true
            darkenSquare(e)
        });
        square.addEventListener("mouseover", (e) => {
            if (isDown) darkenSquare(e)
        })
        canvas.appendChild(square);
    }

    canvas.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}

const darkenSquare = (e) => {
    e.target.style.backgroundColor = color.value;
}

const changeCanvas = (e) => {
    e.preventDefault()
    removeChildren(canvas);
    makeCanvas(input.value);
    console.log(`${input.value} is a ${typeof input.value}`);
}

const canvas = document.getElementById("canvas");
const button = document.getElementById("submit");
const input = document.getElementById("input");
const color = document.getElementById("pickColor");
makeCanvas(16);
button.addEventListener('click', changeCanvas);