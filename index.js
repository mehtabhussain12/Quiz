let Questions = [
    {
        id: 1,
        Question: "What is the capital of Pakistan?",
        option: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
        correctanswer: "Islamabad"
    },
    {
        id: 2,
        Question: "Which mountain range is located in northern Pakistan?",
        option: ["Himalayas", "Karakoram", "Hindu Kush", "All of these"],
        correctanswer: "All of these"
    },
    {
        id: 3,
        Question: "Pakistan's national language is?",
        option: ["Punjabi", "Urdu", "Sindhi", "English"],
        correctanswer: "Urdu"
    },
    {
        id: 4,
        Question: "When did Pakistan win its first Olympic gold medal?",
        option: ["1960", "1964", "1968", "1972"],
        correctanswer: "1960"
    },
    {
        id: 5,
        Question: "The Lahore Resolution was passed in which year?",
        option: ["1940", "1947", "1935", "1956"],
        correctanswer: "1940"
    },
    {
        id: 6,
        Question: "Which is the largest province of Pakistan by area?",
        option: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"],
        correctanswer: "Balochistan"
    },
    {
        id: 7,
        Question: "Pakistan's national flower is?",
        option: ["Rose", "Jasmine", "Tulip", "Sunflower"],
        correctanswer: "Jasmine"
    },
    {
        id: 8,
        Question: "The K2 mountain is located in which range?",
        option: ["Himalayas", "Karakoram", "Hindu Kush", "Pamir"],
        correctanswer: "Karakoram"
    },
    {
        id: 9,
        Question: "Which river is known as the lifeline of Pakistan?",
        option: ["Jhelum", "Chenab", "Indus", "Ravi"],
        correctanswer: "Indus"
    },
    {
        id: 10,
        Question: "Pakistan's first Governor-General was?",
        option: ["Liaquat Ali Khan", "Quaid-e-Azam", "Ayub Khan", "Iskander Mirza"],
        correctanswer: "Quaid-e-Azam"
    },
];
let currentQuestion = 0
let score = 0
let current = document.getElementById('current')
let result = document.getElementById("score")
let nextbtn = document.getElementById("nextbtn")
let resetbtn = document.getElementById("resetbtn")
let optionElement = document.getElementById("options")
let questionsElement = document.getElementById("questions")
let quizContainer = document.getElementById("quiz-container")
let resultcontainer = document.getElementById("result")
resetbtn.style.display = "none"
function showQuestions() {
    nextbtn.disabled = true
    current.innerText = currentQuestion +1

    questionsElement.innerHTML = Questions[currentQuestion].Question

    optionElement.innerHTML = '';
    Questions[currentQuestion].option.map((element) => {
        optionElement.innerHTML += `<button onclick="checkAnswer(event)" class="option-btn" id="selctBtn">${element}</button>`
    })
    result.innerText = `Score: ${score}`;
} showQuestions();

function checkAnswer(event) {

    let selectedBtn = event.target;
    let selectedAnswer = selectedBtn.innerText;
    let correctAnswer = Questions[currentQuestion].correctanswer;
    let options = document.querySelectorAll(".option-btn");

    nextbtn.disabled = false;
    options.forEach((btn) => {
        btn.disabled = true;
    });
    if (selectedAnswer === correctAnswer) {
        selectedBtn.classList.add("active");
        score++;
    } else {
        selectedBtn.classList.add("inactive");
    }


    document.getElementById("score").innerText = `Score: ${score}`;

}


function NextQuestion() {
    if (currentQuestion +1 >= Questions.length) {
        nextbtn.disabled = true;
        nextbtn.style.display = "none"
        resetbtn.style.display = "block"
        quizContainer.style.display = "none"
        resultcontainer.style.display="block"
        resultcontainer.innerHTML =
            `<h2>Quiz Completed!</h2><p>Your final score is ${score}/${Questions.length}</p>`;
        return; 
    }

    currentQuestion++;
    showQuestions();
}

function Reset() {
     currentQuestion = 0
    showQuestions()
    resultcontainer.style.display = "none"
    quizContainer.style.display = "block"
   
    score = 0
    
    nextbtn.style.display = "block"
    nextbtn.disabled = false
    resetbtn.style.display = "none"
   
}
