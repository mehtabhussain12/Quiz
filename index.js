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
    // More questions follow...
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
 document.getElementById("nextbtn").disabled = false;
//  let resetbtn =document.getElementById("resetbtn").hidden = true;
function showQuestions() {
 document.getElementById('current').textContent = currentQuestion + 1;
    let questionsElement = document.getElementById("questions")
    questionsElement.innerHTML = Questions[currentQuestion].Question

    let optionElement = document.getElementById("options")
    optionElement.innerHTML = '';
    Questions[currentQuestion].option.map((element) => {
        optionElement.innerHTML += `<button onclick="checkAnswer(event)" class="option-btn" id="selctBtn">${element}</button>`
        // console.log(element)
    })
   
    let result = document.getElementById("score")
    result.innerText = `Score: ${score}`;
}
function checkAnswer(event) {
    let selectedAnswer = event.target.innerText;
    let correctAnswer = Questions[currentQuestion].correctanswer;
    if (selectedAnswer == correctAnswer) {
        score++;
        event.target.classList.add("active");
    }
    else {
        event.target.classList.add("inactive");
    }  
}
  
        function NextQuestion() {
            currentQuestion++;
            if (currentQuestion >= Questions.length) {
                document.getElementById("questions").innerHTML = "Quiz Completed!";
                document.getElementById("options").innerHTML = "";
                document.getElementById("nextbtn").disabled = true;
                resetbtn.hidden = false;
                  document.getElementById("questions").innerHTML = 
                    `<h2>Quiz Completed!</h2><p>Your final score is ${score}/${Questions.length}</p>`;
                return;
            }
            
            showQuestions();
       
        }
        // Reset()
        showQuestions();
        // function Reset(){
        //     currentQuestion = 0;
        //     score = 0;
        //     document.getElementById("nextbtn").disabled = false;
        //     showQuestions();
        //     let result = document.getElementById("score");
        //     result.innerText = score;
        // }