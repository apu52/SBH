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
        question: "Q. What is the primary benefit of using cloud computing?",
        choices: ["Increased hardware costs", "Reduced scalability", "Pay-per-use pricing model", "Limited accessibility"],
        answer: "Pay-per-use pricing model"
    },
    {
        question: "Q. Which of the following is NOT a cloud computing service model?",
        choices: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Database as a Service (DBaaS)"],
        answer: "Database as a Service (DBaaS)"
    },
    {
        question: "Q. What is the name of the largest public cloud platform provider?",
        choices: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Microsoft Azure", "IBM Cloud"],
        answer: "Amazon Web Services (AWS)"
    },
    {
        question: "Q. Which cloud deployment model provides dedicated infrastructure for a single organization?",
        choices: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
        answer: "Private Cloud"
    },
    {
        question: "Q. What does SaaS stand for in cloud computing?",
        choices: ["Software and as a Service", "System as a Service", "Storage as a Service", "Software as a Service"],
        answer: "Software as a Service"
    },
    {
        question: "Q. Which cloud computing service model offers virtualized computing resources over the internet?",
        choices: ["IaaS", "PaaS", "SaaS", "FaaS"],
        answer: "IaaS"
    },
    {
        question: "Q. What is the purpose of a content delivery network (CDN) in cloud computing?",
        choices: ["To distribute content across multiple servers globally", "To encrypt sensitive data during transmission", "To manage user authentication and access control", "To automate deployment processes"],
        answer: "To distribute content across multiple servers globally"
    },
    {
        question: "Q. Which of the following is NOT a characteristic of cloud computing?",
        choices: ["On-demand self-service", "Resource pooling", "High initial capital investment", "Rapid elasticity"],
        answer: "High initial capital investment"
    },
    {
        question: "Q. What is the term for the practice of using multiple cloud service providers to meet specific business needs?",
        choices: ["Cloud collaboration", "Cloud federation", "Multi-cloud", "Cloud integration"],
        answer: "Multi-cloud"
    },
    {
        question: "Q. Which security measure is essential for protecting data in the cloud?",
        choices: ["Data sovereignty", "Data obfuscation", "Data encryption", "Data fragmentation"],
        answer: "Data encryption"
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

    if (currentQuestionIndex < quiz.length) {
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
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!😁`;
    displayAlert("You have completed this quiz!🥳");
    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Show Alert
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(() => {
        alert.style.display = "none";
    }, 2000);
}

// Function to Start Timer
const startTimer = () => {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    const countDown = () => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            const confirmUser = confirm("Time Up!!! Do you want to play the quiz again");
            if (confirmUser) {
                timeLeft = 10;
                startQuiz();
            }
            else {
                startBtn.style.display = "block";
                container.style.display = "none";
                return;
            }
        }
    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () => {
    clearInterval(timerID);
}

// Function to shuffle question
const shuffleQuestions = () => {
    for (let i = quiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}

// Function to Start Quiz
const startQuiz = () => {
    timeLeft = 10;
    timer.style.display = "flex";
    shuffleQuestions();
}

// Adding Event Listener to Start Button
startBtn.addEventListener('click', () => {
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
