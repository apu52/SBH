const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');

// Correct answer

// Questions & answers
const quiz = [
    {
        question: "Q. If the ratio of boys to girls in a class is 3:2 and the number of boys is 24, what is the total number of students in the class?",
        choices: ["30", "36", "40", "48"],
        answer: "36"
    },
    {
        question: "Q. If the sum of two numbers is 35 and their difference is 5, what is the product of the two numbers?",
        choices: ["144", "150", "160", "175"],
        answer: "175"
    },
    {
        question: "Q. A car travels a distance of 400 km at a constant speed. If the speed of the car is increased by 10 km/hr, it would take 2 hours less to cover the same distance. What is the original speed of the car?",
        choices: ["40 km/hr", "50 km/hr", "60 km/hr", "70 km/hr"],
        answer: "60 km/hr"
    },
    {
        question: "Q. What is the least number which when divided by 5, 6, 7, and 8 leaves a remainder of 3 in each case?",
        choices: ["113", "173", "203", "233"],
        answer: "173"
    },
    {
        question: "Q. The ratio of the ages of A and B is 4:5. After 6 years, the ratio of their ages will be 6:7. What is A's age?",
        choices: ["16 years", "18 years", "20 years", "22 years"],
        answer: "20 years"
    },
    {
        question: "Q. What is the value of (6 + 3 ÷ 3) × 8 - 4?",
        choices: ["20", "24", "26", "32"],
        answer: "24"
    },
    {
        question: "Q. If 20% of a number is 24, what is 30% of that number?",
        choices: ["28", "32", "36", "40"],
        answer: "36"
    },
    {
        question: "Q. The length of a rectangle is increased by 20% and its breadth is decreased by 10%. What is the change in its area?",
        choices: ["8% increase", "8% decrease", "10% increase", "10% decrease"],
        answer: "8% increase"
    },
    {
        question: "Q. If the perimeter of a square is 40 cm, what is its area?",
        choices: ["100 sq. cm", "121 sq. cm", "144 sq. cm", "169 sq. cm"],
        answer: "100 sq. cm"
    },
    {
        question: "Q. A train covers a distance of 600 km in 6 hours. What is its speed in km/hr?",
        choices: ["100 km/hr", "150 km/hr", "200 km/hr", "250 km/hr"],
        answer: "200 km/hr"
    }
];


// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 10;
let timerID = null;

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected');
            }
        });
    }

    if(currentQuestionIndex < quiz.length){
        startTimer();
    }
}

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert("Correct Answer!");
        displayAlert("Correct Answer!");
        score++;
    }
    else {
        // alert("Wrong answer");
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    timeLeft = 10;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}

// Function to show score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Show Alert
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=>{
        alert.style.display = "none";
    }, 2000);
}

// Function to Start Timer
const startTimer = () => {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    const countDown = ()=>{
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0){
            const confirmUser = confirm("Time Up!!! Do you want to play the quiz again");
            if(confirmUser){
                timeLeft = 10;
                startQuiz();
            }
            else{
                startBtn.style.display = "block";
                container.style.display = "none";
                return;
            }
        }
    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () =>{
    clearInterval(timerID);
}

// Function to shuffle question
const shuffleQuestions = () =>{
    for(let i=quiz.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}

// Function to Start Quiz
const startQuiz = () =>{
    timeLeft = 10;
    timer.style.display = "flex";
    shuffleQuestions();
}

// Adding Event Listener to Start Button
startBtn.addEventListener('click', ()=>{
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        // alert("Select your answer");
        displayAlert("Select your answer");
        return;
    }
    if (quizOver) {
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});
