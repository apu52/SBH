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
        question: "Q. What is a common method cybercriminals use to gain unauthorized access to a system?",
        choices: ["Phishing", "Social engineering", "Distributed Denial of Service (DDoS) attacks", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Q. Which of the following is NOT an example of multi-factor authentication (MFA)?",
        choices: ["Password", " Security questions", "One-time password (OTP)", "Fingerprints"],
        answer: "Password"
    },
    {
        question: "Q. Which type of malware encrypts files on a victim's computer and demands payment for their release?",
        choices: ["Trojan horse", "Ransomware", "Spyware", "Adware"],
        answer: "Ransomware"
    },
    {
        question: "Q. What does VPN stand for?",
        choices: ["Virtual Personal Network", "Very Protected Network", "Virtual Private Network", "Visualized Personal Network"],
        answer: "Virtual Private Network"
    },
    {
        question: "Q. Which of the following is a secure method for storing passwords?",
        choices: ["Writing them down on a sticky note", "Saving them in an unencrypted text file", "Using a password manager", " Memorizing them all"],
        answer: "Using a password manager"
    },
    {
        question: "Q. What is the purpose of a firewall in cybersecurity?",
        choices: ["To prevent unauthorized access to or from a private network", "To encrypt data transmissions", "To detect and remove viruses", "To track user activityinteger"],
        answer: "To prevent unauthorized access to or from a private network"
    },
    {
        question: "Q. What is the primary goal of a penetration test?",
        choices: ["To simulate a cyberattack and identify vulnerabilities in a system", "To encrypt sensitive data", "To monitor network traffic", "To create secure passwords"],
        answer: "To simulate a cyberattack and identify vulnerabilities in a system"                                                                              
    },
    {
        question: "Q. Which encryption algorithm is commonly used for secure communication over the internet?",
        choices: ["AES (Advanced Encryption Standard)", "RSA (Rivest-Shamir-Adleman)", "MD5 (Message Digest Algorithm 5)", " DES (Data Encryption Standard)"],
        answer: "AES (Advanced Encryption Standard)"
    },
    {
        question: "Q. What is the term for the practice of tricking individuals into revealing sensitive information or performing actions they wouldn't normally do?",
        choices: ["Hacking", "Social Engineering", "Phishing", "Spoofing"],
        answer: "Social Engineering"
    },
    {
        question: "Q. Which of the following is NOT a recommended best practice for securing a wireless network?",
        choices: [" Enabling WPA2 encryption", "Disabling SSID broadcasting", "Using a default administrator password", "  Implementing MAC address filtering"],
        answer: "Using a default administrator password"
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
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!😊`;
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
            const confirmUser = confirm("Time Up😅!!! Do you want to play the quiz again");
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
