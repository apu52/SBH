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
        question: "Q. What is the primary goal of digital marketing?",
        choices: ["Increasing brand awareness", "Generating leads", "Driving website traffic", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Q. Which of the following is NOT a common digital marketing channel?",
        choices: ["Social media marketing", "Email marketing", "Television advertising", "Search engine optimization (SEO)"],
        answer: "Television advertising"
    },
    {
        question: "Q. What is the term for the process of optimizing a website to rank higher in search engine results?",
        choices: ["Pay-per-click (PPC)", "Search engine optimization (SEO)", "Cost-per-click (CPC)", "Search engine marketing (SEM)"],
        answer: "Search engine optimization (SEO)"
    },
    {
        question: "Q. Which social media platform is best suited for professional networking and B2B marketing?",
        choices: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
        answer: "LinkedIn"
    },
    {
        question: "Q. What is the purpose of A/B testing in digital marketing?",
        choices: ["To compare the effectiveness of different marketing channels", "To analyze website traffic patterns", "To test variations of a marketing asset to determine which performs better", "To track conversion rates"],
        answer: "To test variations of a marketing asset to determine which performs better"
    },
    {
        question: "Q. What is the term for the practice of sending promotional messages to a group of email subscribers?",
        choices: ["Cold calling", "Direct mail marketing", "Email marketing", "Content marketing"],
        answer: "Email marketing"
    },
    {
        question: "Q. Which metric measures the percentage of website visitors who take a desired action, such as making a purchase or filling out a form?",
        choices: ["Click-through rate (CTR)", "Conversion rate", "Bounce rate", "Impressions"],
        answer: "Conversion rate"
    },
    {
        question: "Q. What is the purpose of a call-to-action (CTA) in digital marketing?",
        choices: ["To provide contact information for the business", "To encourage users to take a specific action, such as making a purchase or signing up for a newsletter", "To share interesting content with followers", "To drive organic traffic to a website"],
        answer: "To encourage users to take a specific action, such as making a purchase or signing up for a newsletter"
    },
    {
        question: "Q. Which advertising model charges advertisers based on the number of times their ad is clicked?",
        choices: ["Cost-per-acquisition (CPA)", "Cost-per-thousand (CPM)", "Cost-per-click (CPC)", "Cost-per-view (CPV)"],
        answer: "Cost-per-click (CPC)"
    },
    {
        question: "Q. What is the term for the process of tailoring marketing efforts to a specific group of consumers based on demographics, interests, or behavior?",
        choices: ["Targeting", "Segmentation", "Personalization", "Customization"],
        answer: "Segmentation"
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
