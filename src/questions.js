export const NEW_QUESTIONS = [
    {
        question : "Who has spent a long time working on this?",
        answers : [
            { text : "Mrs. Murray", correct : true},
            { text : "Vladimir Putin", correct : false},
            { text : "Jesus", correct : false},
            { text : "Iron Man", correct : false},
        ]
    },
    {
        question : "What does the Children's experience tell you about tesser travel?",
        answers : [
            { text : "It is easy", correct : false},
            { text : "It is very difficult", correct : true},
            { text : "1942", correct : false},
            { text : "who cares", correct : false},
        ]
    },
    {
        question : "What did Mrs. Whatsit do to make Charles Wallace scold her?",
        answers : [
            { text : "For committing a federal crime", correct : false},
            { text : "For eating all the chocolate", correct : false},
            { text : "She took the sheets from Ms. Bumcombe", correct : true},
            { text : "elephant", correct : false},
        ]
    },
    {
        question : "Wy does Calvin call Charles a moron?",
        answers : [
            { text : "Because he did not speak until he was 4", correct : true},
            { text : "Reasons unknown", correct : false},
            { text : "Because", correct : false},
            { text : "Calvin calls everyone a moron", correct : false},
        ]
    },
    {
        question : "Why is Mrs. Murray upset at Mrs. Whatsit?",
        answers : [
            { text : "She was jealous of her", correct : false},
            { text : "She was overcome by it", correct : false},
            { text : "She ruined the tile floor with her wet socks", correct : false},
            { text : "Because she said 'there is such a thing as a tesseract'", correct : true},
        ]
    },
    {
        question : "What is Mrs. Whatsit?",
        answers : [
            { text : "A star and anything she wants to be", correct : true},
            { text : "An Alien", correct : false},
            { text : "A fortune teller", correct : false},
            { text : "Iron Man", correct : false},
        ]
    },
    {
        question : "Why do the inhabitants of camazotz behave like robots?",
        answers : [
            { text : "They are robots", correct : false},
            { text : "They are a dictatorship", correct : false},
            { text : "They have given in to it", correct : true},
            { text : "They are infected by an 80's dance craze", correct : false},
        ]
    },
    {
        question : "Why is the happy medium reluctant to look at earth in her crystal ball?",
        answers : [
            { text : "Because Earth shadowed by the green thing", correct : false},
            { text : "Because Earth shadowed by the pink thing", correct : false},
            { text : "Because Earth shadowed by the slightly grey thing", correct : false},
            { text : "Because Earth shadowed by the black thing", correct : true},
        ]
    },
    {
        question : "Who understands the concept of a tesseract completely?",
        answers : [
            { text : "Mr Murray", correct : false},
            { text : "Your Mother", correct : false},
            { text : "Bill Gates", correct : false},
            { text : "Mrs. Whatsit", correct : true},
        ]
    },
    {
        question : "What did Calvin refer to as evil?",
        answers : [
            { text : "Mr Murray", correct : false},
            { text : "The black thing", correct : true},
            { text : "Donald Trump", correct : false},
            { text : "Mrs. Whatsit", correct : false},
        ]
    },

]

export const ASKED_QUESTIONS = []

export let SCORE = 0


export function askAQuestion () {
    const index = pickAQuestionIndex(NEW_QUESTIONS.length)
    const question = NEW_QUESTIONS.splice(index, 1)[0]
    ASKED_QUESTIONS.unshift(question)
    return question
}

export function pickAQuestionIndex(length) {
    return Math.ceil(Math.random() * length) - 1
}

export function isItCorrect (answer) {
    let correct = false
    if (1 <= answer && answer <= ASKED_QUESTIONS[0].answers.length) {
        correct = ASKED_QUESTIONS[0].answers[answer].correct
    }
    if (correct) SCORE += 1
    return correct
}