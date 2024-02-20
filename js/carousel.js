const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("carousel-btn-left");
const rightBtn = document.getElementById("carousel-btn-right");
const img = document.querySelectorAll(".carousel-img");



let carouselIdx = 0;

let interval = setInterval(run, 3000);

function run() {
    carouselIdx++;
    changeImage();
}

function changeImage() {
    if (carouselIdx > img.length - 1) {
        carouselIdx = 0;
    } else if (carouselIdx < 0) {
        carouselIdx = img.length - 1;
    }
    imgs.style.transform = `translateX(${-carouselIdx * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 3000);
}

leftBtn.addEventListener("click", () => {
    carouselIdx--;
    resetInterval();
    changeImage();
});

rightBtn.addEventListener("click", () => {
    carouselIdx++;
    resetInterval();
    changeImage();
});

