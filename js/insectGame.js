const insectScreens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const insectTimeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const messageEl = document.getElementById('insect-message')
const game_container = document.getElementById('game-container')
const body = document.querySelector('body')



let selected_insect = {}
let insectScore = 0
let insectSeconds = 0

addClassToGameContainer(insectScreens[0])
//setInterval(addClassToGameContainer, 5000)

function addClassToGameContainer(element) {
    console.log(element)
    if (body.offsetWidth < (440 - 16)) {
        console.log("430")
        element.classList.add("full-424")
    } else if
        (body.offsetWidth < (666 - 16)) {
        console.log("630")
        element.classList.add("full-650")
    }
    else {
        element.classList.add("full")
    }

}

start_btn.addEventListener('click', () => {
    insectScreens[0].classList.add('up')
    //insectScreens[1].classList.add('full')
    addClassToGameContainer(insectScreens[1])
    insectScreens[0].style.display = "none"
}
)

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }
        insectScreens[1].classList.add('up')
        insectScreens[1].style.display = "none"
        //insectScreens[2].classList.add('full')
        addClassToGameContainer(game_container)
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(insectSeconds / 60)
    let s = insectSeconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    insectTimeEl.innerHTML = `Time: ${m}:${s}`
    insectSeconds++
}


function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = ` <img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`
    insect.addEventListener('click', catchInsect)
    game_container.appendChild(insect)
}
function getRandomLocation() {
    let x = Math.random() * (game_container.offsetWidth)
    if (x > game_container.offsetWidth) {
        x = x - 100
    }
    if (x < 0) {
        x = -100
        if (x < game_container.offsetWidth) {
            x = game_container.offsetWidth - 100
        }
    }
    let y = Math.random() * (game_container.offsetHeight)
    if (y > game_container.offsetHeight) { y = y - 100 }
    if (y < 0) {
        y = -100
        if (y < game_container.offsetHeight) {
            y = game_container.offsetHeight - 100
        }
    }
    console.log(x, y);
    console.log(game_container.getBoundingClientRect().width, game_container.offsetWidth);
    return { x, y }
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)

}

function increaseScore() {
    insectScore++;
    if (score > 19) {
        messageEl.classList.add('visible')
    }
    scoreEl.innerHTML = `Score:${insectScore}`
}

