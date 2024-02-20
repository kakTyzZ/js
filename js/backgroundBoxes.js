const boxesContainer = document.getElementById("boxes");
const backgroundBoxesBtn = document.getElementById("backgroundBoxes-btn");

backgroundBoxesBtn.addEventListener('click', function () {
    boxesContainer.classList.toggle('big')
})

createBoxes()

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`

            boxesContainer.appendChild(box)
        }
    }
}























/* backgroundBoxesBtn.addEventListener("click", () => {
    boxesContainer.classList.toggle("big");
});

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        console.log("i:", i);
        for (let j = 0; j < 4; j++) {
            console.log("j:", j);
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;

            boxesContainer.appendChild(box);
        }
    }
}

createBoxes();
 */