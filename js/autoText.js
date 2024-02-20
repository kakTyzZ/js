const textEl = document.getElementById("autoText");
const speedEl = document.getElementById("autoText-speed");
const text = "HTML   / SCSS /   JS    ";
let idx = 1;
let speed = 100 / speedEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
    speed = 100 / e.target.value;
});

