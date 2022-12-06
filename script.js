const answer1 = document.querySelector('.first');
const timerDiv = document.querySelector('.timerDiv');
const centerDiv = document.querySelector('.center')
const answer2 = document.querySelector('.second');
const answer3 = document.querySelector('.third');
const currentQuestion = document.querySelector('.question');
const answer4 = document.querySelector('.fourth');
const btnStart = document.querySelector('.start');
const restart = document.querySelector('.restart');

let countQuestion
let shuffle
let countGoodAnswer
let loading = false;
const nbQuestion=4;
btnStart.addEventListener('click', () => {
    timerDiv.classList.remove('none')
    startGame();
})

restart.addEventListener('click', () => {
    startGame();
})

function startGame() {
    countQuestion = 0;
    countGoodAnswer = 0;
    shuffle = shuffleQuestion();
    restart.classList.add('hide');
    btnStart.classList.add('hide');
    centerDiv.classList.remove('center');
    answer1.classList.remove('hide');
    answer2.classList.remove('hide');
    answer3.classList.remove('hide');
    answer4.classList.remove('hide');
    setQuestion();
    time();
}
let timer;
let sec;
function time(){
    sec=9;
     timer=setInterval(()=>{
        timerDiv.innerHTML='timer : '+sec;
        sec--;
        if(sec==-1){
            clearInterval(timer);
            verify();
        }
    },1000);
}
function setQuestion() {
    if (countQuestion >= nbQuestion) {
        end();
    } else {
        currentQuestion.innerText = selectQuestion(shuffle);
        answer1.innerText = selectFirstAnswer(shuffle);
        answer2.innerText = selectSecondAnswer(shuffle);
        answer3.innerText = selectThirdAnswer(shuffle);
        answer4.innerText = selectFourthAnswer(shuffle);
        countQuestion++;
    }
    loading = false;
}

function end() {
    currentQuestion.innerText = ("Score :" + countGoodAnswer + "/"+nbQuestion);
    restart.classList.remove('hide');
    centerDiv.classList.add('center');
    answer1.classList.add("hide");
    answer2.classList.add("hide");
    answer3.classList.add("hide");
    answer4.classList.add("hide");
    clearInterval(timer);
    timerDiv.classList.add('none')
}
function selectQuestion(shuffleJson) {
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
    loading=true;
    setTimeout(() => {
        answer1.classList.remove("wrong", "true");
        answer2.classList.remove("wrong", "true");
        answer3.classList.remove("wrong", "true");
        answer4.classList.remove("wrong", "true");
        setQuestion();
        time();
    }, 1000);

}

function shuffleQuestion() {
    let shuffleJson = question.sort((a, b) => 0.4 - Math.random());
    return shuffleJson
}


function verify(){
    loading=true;
    console.log(loading);
    document.querySelectorAll('.answer').forEach((item2, index2) => {
        item2.classList.add('wrong');
        if(shuffle[countQuestion-1].goodAnswer==index2+1){
            item2.classList.remove('wrong');
            item2.classList.add('true');
        }

    })
    reload();
}
document.querySelectorAll('.answer').forEach((item, index) => {
    item.addEventListener('click', event => {
        if (loading) {
            return;
        }
        clearInterval(timer);
        sec=11;
        loading=true;
        document.querySelectorAll('.answer').forEach((item2, index2) => {
            item2.classList.add('wrong');
            if (shuffle[countQuestion - 1].goodAnswer == index2 + 1) {
                item2.classList.remove('wrong');
                item2.classList.add('true');
                if (index2 + 1 == index + 1) {
                    countGoodAnswer++;
                }
            }
        })
        reload();
    })
})


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
        question: 'Quelle est la couleur vive?',
        firstAnswer: 'noir',
        secondAnswer: 'bleu',
        thirdAnswer: 'vert',
        fourthAnswer: 'jaune',
        goodAnswer: '4'
    },
    {
        question: 'Combien de sports composent un décathlon?',
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
    },
    {
        question: 'Choisisez le plus long fleuve du monde',
        firstAnswer: 'Amazone',
        secondAnswer: 'Rhin',
        thirdAnswer: 'Mississippi',
        fourthAnswer: 'Nil',
        goodAnswer: 1
    }
]
