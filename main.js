const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const quizContElem = document.getElementById('quiz-cont');
const quizElem = document.getElementById('quiz');
const answerElem = document.getElementById('answer');
const feedbackElem = document.getElementById('feedback');
let currentQuizIndex, score;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuizIndex++;
    setNextQuestion();
})

function startGame() {
    // console.log('hello game started');
    startBtn.classList.add("hide");
    feedbackElem.classList.add("hide");
    currentQuizIndex = 0;
    score = 0;
    quizContElem.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuizIndex]);
}

function showQuestion(question) {
    quizElem.innerHTML = question.question;
    question.answers.forEach(answer => {
        // console.log(answer.ans)
        const button = document.createElement('button');
        button.innerText = answer.ans;
        button.classList.add('btn');
        
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAns)
        answerElem.appendChild(button);
    });
    // console.log(question.answers)
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide');
    while (answerElem.firstChild) {
        answerElem.removeChild(answerElem.firstChild);
    }
    
}

function selectAns(ev) {
    // console.log("clicked answer")
    const selectedBtn = ev.target;
    const correct = selectedBtn.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerElem.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct) {
        score++;
        // console.log(score);
    }
    if (questions.length > currentQuizIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        startBtn.innerText = "Restart";
        startBtn.classList.remove('hide');

        if (score >= questions.length -1) {
            feedbackElem.innerHTML = `<strong>CONGRATULATIONS!!</strong> YOU HAVE SCORED ${score}/ ${questions.length} `
        } else if (score >= questions.length/2) {
            feedbackElem.innerHTML = `<strong>Good Trial</strong> YOU HAVE SCORED ${score}/ ${questions.length} `
        } else if (score == 0) {
            feedbackElem.innerHTML = `<strong>POOR!!</strong> YOU HAVE SCORED ${score}/ ${questions.length} `
        } else {
            feedbackElem.innerHTML = `<strong></strong> YOU HAVE SCORED ${score}/ ${questions.length} `
        }
        
        feedbackElem.classList.remove('hide')
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: "1.) What is the capital city of Nigeria? ",
        answers: [
            {ans: "Lagos", correct: true},
            {ans: "Nairobi", correct: false},
            {ans: "Kisumu", correct: false}
        ]
    },
    {
        question: "2.) What is the Kiswahili word for anemia? ",
        answers: [
            {ans: "marende", correct: false},
            {ans: "kamande", correct: false},
            {ans: "kikamba", correct: true}
        ]
    },
    {
        question: "3.) Who is the first president of Kenya? ",
        answers: [
            {ans: "Oginga Odinga", correct: false},
            {ans: "Kenyatta", correct: true},
            {ans: "Daniel Moi", correct: false}
        ]
    },
    {
        question: "4.) Who is the cabinet secretary of health? ",
        answers: [
            {ans: "Junet Muhamed", correct: false},
            {ans: "Mutai Kagwe", correct: true},
            {ans: "Sicily Kariuki", correct: false}
        ]
    },
    {
        question: ".5) How much is a X131e Lenovo Thinkpad? ",
        answers: [
            {ans: "Ksh 13,000", correct: true},
            {ans: "Ksh 20,000", correct: false},
            {ans: "Ksh 10000", correct: false}
        ]
    },
    {
        question: "6.) What is the name of kenyan first Corona virus victim? ",
        answers: [
            {ans: "Brenda", correct: true},
            {ans: "Mwai", correct: false},
            {ans: "Magret", correct: false}
        ]
    },
    {
        question: ".7) How long has the door to door cafue in Kenya lasted? ",
        answers: [
            {ans: "More than 6 months", correct: true},
            {ans: "1 year", correct: true},
            {ans: "Exactly 123 days", correct: false}
        ]
    },
    {
        question: ".8) Define Corona virus ",
        answers: [
            {ans: "Cardiovascular infection", correct: false},
            {ans: "Respiratory infection", correct: true},
            {ans: "Digestion disorder", correct: false}
        ]
    },
    {
        question: "9.) Who is the current president of UK? ",
        answers: [
            {ans: "Putin", correct: false},
            {ans: "Harry Kane", correct: false},
            {ans: "Boris", correct: true}
        ]
    },
    {
        question: "10.) Who is the first president of Kenya? ",
        answers: [
            {ans: "Oginga Odinga", correct: false},
            {ans: "Kenyatta", correct: true},
            {ans: "Daniel Moi", correct: false}
        ]
    }
]


// const fallbck = 
// {
//     question: "Who is the first president of Kenya? ",
//     answers: [
//         { ans: "kenyatta", correct: true},
//         { ans: "Daniel", correct: false}
//     ]
// }
    