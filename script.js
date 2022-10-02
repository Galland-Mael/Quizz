const answer = document.querySelector('.answer');
const centerDiv = document.querySelector('.center')

const btnStart = document.querySelector('.start')
let choice = 0;
let countQuestion = 0;
let shuffle = shuffleQuestion(question);
btnStart.addEventListener('click', () => {
    btnStart.classList.add('hide')
    centerDiv.classList.remove('center');
    answer1.classList.remove('hide');
    answer2.classList.remove('hide');
    answer3.classList.remove('hide');
    answer4.classList.remove('hide');
    setQuestion();
})

function setQuestion() {
    answer1.innerText = selectFirstAnswer(question);
    answer2.innerText = selectSecondAnswer(question);
    answer3.innerText = selectThirdAnswer(question);
    answer4.innerText = selectFourthAnswer(question);
}

answer1.addEventListener('click', () => {
    choice = 1;
    answer1.innerText = selectFirstAnswer(question);
    selectFirstAnswer(question);
    answer2.classList.add("wrong");
    answer3.classList.add("wrong");
    answer4.classList.add("wrong");
})
function selectQuestion (shuffleJson){

}
function selectFirstAnswer(shuffleJson) {
    return shuffleJson[countQuestion].firstAnswer;
}

function selectSecondAnswer(shuffleJson) {
    return shuffleJson[countQuestion].secondAnswer;
}

function selectThirdAnswer(shuffleJson) {
    return shuffleJson[countQuestion].thirdAnswer;
}

function selectFourthAnswer(shuffleJson) {
    return shuffleJson[countQuestion].fourthAnswer;
}

function reload() {
    choice = 0;
    setTimeout(() => {
        answer1.classList.remove("wrong", "true");
        answer2.classList.remove("wrong", "true");
        answer3.classList.remove("wrong", "true");
        answer4.classList.remove("wrong", "true");
    }, 1500);
}


const question = [
    {
        question: 'Quelle est la capitale de la Pologne?',
        firstAnswer: 'Bratislava',
        secondAnswer: 'Varsovie',
        thirdAnswer: 'Prague',
        fourthAnswer: 'Viennes',
        goodAnswer: '2'
    },
    {
        question: 'Quelle la couleur vive?',
        firstAnswer: 'noir',
        secondAnswer: 'bleu',
        thirdAnswer: 'vert',
        fourthAnswer: 'jaune',
        goodAnswer: '4'
    },
    {
        question: 'Combien de sport compose un décathlon?',
        firstAnswer: 8,
        secondAnswer: 7,
        thirdAnswer: 10,
        fourthAnswer: 12,
        goodAnswer: 3
    },
    {
        question: 'Calculer (22-2)*50',
        firstAnswer: 50,
        secondAnswer: 100,
        thirdAnswer: -88,
        fourthAnswer: 120,
        goodAnswer: 2
    }
]