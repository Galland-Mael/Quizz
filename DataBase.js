countQuestion=1;
const question = [
    {
        question: 'Quelle est la capitale de la Pologne?',
        firstAnswer: 'Bratislava',
        secondAnswer: 'Varsovie',
        thirdAnswer: 'Prague',
        fourthAnswer: 'Viennes',
        goodAnswer: 'Varsovie'
    },
    {
        question: 'Quelle la couleur vive?',
        firstAnswer: 'noir',
        secondAnswer: 'bleu',
        thirdAnswer: 'vert',
        fourthAnswer: 'jaune',
        goodAnswer: 'jaune'
    },
    {
        question: 'Combien de sport compose un décathlon?',
        firstAnswer: 8,
        secondAnswer: 7,
        thirdAnswer: 10,
        fourthAnswer: 12,
        goodAnswer: 10
    },
    {
        question: 'Calculer (22-2)*50',
        firstAnswer: 50,
        secondAnswer: 100,
        thirdAnswer: -88,
        fourthAnswer: 120,
        goodAnswer: 100
    }
]

function shuffleQuestion() {
    let shuffleJson = question.sort((a, b) => 0.4 - Math.random());
    return shuffleJson
}

function selectCurrentQuestion(shuffleJson) {
    this.countQuestion++;
    //console.log(typeof(shuffleJson[this.countQuestion-1].toString()))
    return shuffleJson[this.countQuestion - 1];
}

//Sélectionne la Question
function selectQuestion(shuffleJson) {
    return shuffleJson[this.countQuestion].question
}

//Sélectionne la première réponse
function selectFirstAnswer(shuffleJson) {
    return shuffleJson[this.countQuestion].firstAnswer;
}

//Sélectionne la deuxième réponse
function selectSecondAnswer(shuffleJson) {
    return shuffleJson[this.countQuestion].secondAnswer;
}

//Sélectionne la troisième réponse
function selectThirdAnswer(shuffleJson) {
    return shuffleJson[this.countQuestion].thirdAnswer;
}

//Sélectionne la quatrième réponse
function selectFourthAnswer(shuffleJson) {
    return shuffleJson[this.countQuestion].fourthAnswer;
}

//Sélectionnela bonne réponse
function selectGoodAnswer(shuffleJson) {
    return shuffleJson[this.countQuestion].goodAnswer;
}

console.log(typeof(selectFirstAnswer(question)));