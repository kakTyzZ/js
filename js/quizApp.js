const quizData = [
    {
        question: 'Что больше ?',
        a: 'Луна',
        b: 'Сатурн',
        c: 'Меркурий',
        d: 'Венера',
        correct: "b"
    },
    {
        question: 'Что полезнее ?',
        a: 'Чай',
        b: 'Кофе',
        c: 'Лимонад',
        d: 'Пиво',
        correct: "a"
    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('quizAppSubmitButton')


let score = 0
let quizIndex = 0

loadQuiz()

function loadQuiz() {
    let currentQuizData = quizData[quizIndex]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

function getSelectedAnswer() {
    let answer
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', function (e) {
    const userAnswer = getSelectedAnswer()
    if (userAnswer) {
        if (userAnswer == quizData[quizIndex].correct) { score++ }
        quizIndex++
        if (quizIndex < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <div class="quizAppResult">
                <h2>Your score is ${score} out of ${quizData.length} </h2>

                <button onClick=window.location.reload() class="quizAppReloadButton">Reload the game</button>
            </div>
            
            `
        }
    }

})






























/* function loadQuiz() {

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

function getSelectedAnswer() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelectedAnswer()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) { score++ }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <div class="quizAppResult">
                <h2>Your score is ${score} out of ${quizData.length} </h2>

                <button onClick=window.location.reload() class="quizAppReloadButton">Reload the game</button>
            </div>
            
            `
        }
    }
})
 */
























