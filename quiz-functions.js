let currentQuestionIndex = 0;
let userAnswers = [];

// Shuffle quiz data on page load
window.onload = function() {
    shuffleArray(quizData);
    displayQuestion();
};

// Display the current question
function displayQuestion() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    const questionData = quizData[currentQuestionIndex];
    const questionElement = document.createElement("div");

    // Display question
    questionElement.innerHTML = `<h2>${questionData.question}</h2>`;
    quizContainer.appendChild(questionElement);

    // Display options
    questionData.options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `<label><input type="radio" name="answer" value="${option}"> ${option}</label>`;
        quizContainer.appendChild(optionElement);
    });

    // Show next button after answering
    const nextButton = document.getElementById("next-btn");
    nextButton.style.display = "none";
    document.getElementById("submit-btn").style.display = "block";

    // Handle submit answer
    document.getElementById("submit-btn").onclick = function() {
        handleAnswerSubmission(questionData.correctAnswer);
        document.getElementById("submit-btn").style.display = "none";
        nextButton.style.display = "block";
    };
}

// Handle the submission of answers
function handleAnswerSubmission(correctAnswer) {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        userAnswers[currentQuestionIndex] = userAnswer;

        const allOptions = document.querySelectorAll('input[name="answer"]');
        allOptions.forEach(option => {
            const optionLabel = option.parentElement;
            if (option.value === correctAnswer) {
                optionLabel.style.backgroundColor = "green"; // Correct answer
            } else if (option.value === userAnswer) {
                optionLabel.style.backgroundColor = "red"; // Wrong answer
            }
        });
    }
}

// Move to next question
document.getElementById("next-btn").onclick = function() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        displayResults();
    }
};

// Display final results after quiz completion
function displayResults() {
    const resultContainer = document.getElementById("result");
    let correctCount = 0;

    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        if (userAnswer === question.correctAnswer) {
            correctCount++;
        }
    });

    resultContainer.innerHTML = `<h3>You answered ${correctCount} out of ${quizData.length} correctly.</h3>`;
}
