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
        question: "Q. What is the primary goal of supervised learning?",
        choices: ["Clustering data points", "Predicting an output variable based on input data", "Finding patterns in unlabeled data", "Optimizing a reward function"],
        answer: "Predicting an output variable based on input data"
    },
    {
        question: "Q. Which algorithm is commonly used for classification tasks in Machine Learning?",
        choices: ["K-means clustering", "Linear regression", "Decision trees", "Gradient descent"],
        answer: "Decision trees"
    },
    {
        question: "Q. What does the term 'overfitting' refer to in Machine Learning?",
        choices: ["The model performs well on unseen data", "The model memorizes the training data but fails to generalize to new data", "The model underperforms due to lack of training", "The model converges to a local minimum"],
        answer: "The model memorizes the training data but fails to generalize to new data"
    },
    {
        question: "Q. Which evaluation metric is commonly used for regression tasks?",
        choices: ["Accuracy", "Precision", "Mean Squared Error (MSE)", "Recall"],
        answer: "Mean Squared Error (MSE)"
    },
    {
        question: "Q. In unsupervised learning, what is the goal of dimensionality reduction techniques?",
        choices: ["To remove noisy data from the dataset", "To reduce the number of features while preserving important information", "To cluster data points based on similarity", "To optimize model parameters"],
        answer: "To reduce the number of features while preserving important information"
    },
    {
        question: "Q. Which of the following is an ensemble learning technique?",
        choices: ["Logistic Regression", "Support Vector Machines (SVM)", "Random Forest", "K-nearest neighbors (KNN)"],
        answer: "Random Forest"
    },
    {
        question: "Q. What is the purpose of cross-validation in Machine Learning?",
        choices: ["To train the model on multiple subsets of the data and evaluate its performance", "To visualize the decision boundaries of a classifier", "To select the optimal hyperparameters for the model", "To prevent overfitting by regularizing the model"],
        answer: "To train the model on multiple subsets of the data and evaluate its performance"
    },
    {
        question: "Q. Which type of Machine Learning algorithm can automatically learn to perform a task without being explicitly programmed?",
        choices: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Semi-supervised learning"],
        answer: "Reinforcement learning"
    },
    {
        question: "Q. What is the purpose of feature scaling in Machine Learning?",
        choices: ["To remove outliers from the dataset", "To normalize the range of features to improve model convergence", "To increase the complexity of the model", "To reduce the dimensionality of the dataset"],
        answer: "To normalize the range of features to improve model convergence"
    },
    {
        question: "Q. Which algorithm is commonly used for anomaly detection in Machine Learning?",
        choices: ["Linear Discriminant Analysis (LDA)", "K-means clustering", "Isolation Forest", "AdaBoost"],
        answer: "Isolation Forest"
    }
];


// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 100;
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
    timeLeft = 100;
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
                timeLeft = 100;
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
    timeLeft = 100;
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

//JS for accessibility
var screenReaderEnabled = false;

        function toggleAccessibilityMenu() {
            var menu = document.getElementById("accessibilityMenu");
            menu.classList.toggle("active");
        }

        function toggleScreenReader() {
            screenReaderEnabled = !screenReaderEnabled;
            var menuButton = document.getElementById("screenReaderButton");
            if (screenReaderEnabled) {
                speakText("Screen reader enabled");
                menuButton.innerText = "Disable Screen Reader";
                document.body.classList.add("screen-reader-enabled");
                setTimeout(toggleAccessibilityMenu, 5000);
            } else {

                speakText("Screen reader disabled");
                menuButton.innerText = "Enable Screen Reader";
                document.body.classList.remove("screen-reader-enabled");
                toggleAccessibilityMenu();
            }
            // toggleAccessibilityMenu();
        }

        function speakText(text) {
            if (screenReaderEnabled) {
                var utterance = new SpeechSynthesisUtterance(text);
                window.speechSynthesis.speak(utterance);
            }
        }

        function stopSpeaking() {
            window.speechSynthesis.cancel();
        }

        function readquestion() {
            if (screenReaderEnabled) {
                const currentQuestion = quiz[currentQuestionIndex]; // Get the current question object
                const questionText = currentQuestion.question; // Get the text of the current question
                speakText(questionText); // Speak the combined text
            }
        }

        function readchoice(){
            if (screenReaderEnabled) {
                const currentQuestion = quiz[currentQuestionIndex]; 
                const choices = currentQuestion.choices.join(', '); // Join choices into a string separated by commas
                const textToSpeak = `Choices are: ${choices}`; // Combine question and choices
                speakText(textToSpeak); // Speak the combined text
            }
        }

        function speakFinalScore(score) {
            if (screenReaderEnabled) {
                const text = `Your final score is ${score} out of ${quiz.length}`;
                speakText(text);
            }
        }