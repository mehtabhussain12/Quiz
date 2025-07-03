let Questions = [
    {
        id: 1,
        Question: "What is your name?",
        option: ["A", "B", "C"],
        correctanswer: "A"
    },
    {
        id: 2,
        Question: "How old are you",
        option: [20, 25, 28],
        correctanswer: 25
    },
    {
        id: 3,
        Question: "What is your nationality",
        option: ["A", "B", "C"],
        correctanswer: "B" 
    },
    {
        id: 4,
        Question: "What is your sur name??",
        option: ["A", "B", "C"],
        correctanswer: "A"
    },
    {
        id: 5,
        Question: "What is your real name??",
        option: ["A", "B", "C"],
        correctanswer: "C"
    },
]
let currentQuestion = 0
 let score = 0
function showQuestions() {

    let questionsElement = document.getElementById("questions")
    questionsElement.innerHTML = Questions[currentQuestion].Question

    let optionElement = document.getElementById("options")
    optionElement.innerHTML = '';
    Questions[currentQuestion].option.map((element) => {
        optionElement.innerHTML += `<button onclick="checkAnswer('${element}')" id="selctBtn">${element}</button>`
        console.log(element)
    })
   
    let result = document.getElementById("score")
    result.innerText = score
}
function checkAnswer(Answers) {
   let slectedBtn =document.getElementById("selctBtn")
    let answer = Questions[currentQuestion].correctanswer
        if (Answers == answer) {
           score++
        //    console.log(score)
           slectedBtn.style.backgroundColor = "green";
           slectedBtn.style.color= "white";
           
        }
        else {
            slectedBtn.style.backgroundColor = "red";
            console.log("notok")
        }
         slectedBtn.style.display = "block";

}
showQuestions()


function NextQuestion() {

    let nextButton = document.getElementById("nextbtn")
    if (currentQuestion === Questions.length - 1) {
        nextButton.disabled = true
    }
    currentQuestion++
    // console.log(score)
    showQuestions()
    checkAnswer()


}