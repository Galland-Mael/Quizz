const answer1 = document.querySelector('.first');
const centerDiv = document.querySelector('.center')
const answer2 = document.querySelector('.second');
const answer3 = document.querySelector('.third');
const currentQuesion = document.querySelector('.question');
const answer4 = document.querySelector('.fourth');
const answer = document.querySelector('.answer');
const btnStart = document.querySelector('.start')
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
let choice = 0;
let countQuestion = 0;
btnStart.addEventListener('click', () => {
    btnStart.classList.add('hide')
    centerDiv.classList.remove('center');
    answer1.classList.remove('hide');
    answer2.classList.remove('hide');
    answer3.classList.remove('hide');
    answer4.classList.remove('hide');
   setQuestion();
})


let shuffle=shuffleQuestion();
function setQuestion() {
    currentQuesion.innerText = selectQuestion(shuffle);
    answer1.innerText = selectFirstAnswer(shuffle);
    answer2.innerText = selectSecondAnswer(shuffle);
    answer3.innerText = selectThirdAnswer(shuffle);
    answer4.innerText = selectFourthAnswer(shuffle);
    countQuestion++;
}

function selectQuestion (shuffleJson){
    return shuffleJson[countQuestion].question;
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


function shuffleQuestion() {
    let shuffleJson = question.sort((a, b) => 0.4 - Math.random());
    return shuffleJson
}