let currentQuestionIndex = 0;
let userAnswers = [];
let quizAnswered = false; // Track if the current question is answered

// Shuffle quiz data on page load
window.onload = function() {
    shuffleArray(quizData);
    displayQuestion();
};

// Display the current question
function displayQuestion() {
    const quizContainer = document.getElementById("quiz");
    const solutionContainer = document.getElementById("solution");
    quizContainer.innerHTML = "";
    solutionContainer.style.display = "none";

    const questionData = quizData[currentQuestionIndex];

    // Display question
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `<h2>${questionData.question}</h2>`;
    quizContainer.appendChild(questionElement);

    // Display options with letter A, B, C, D
    const options = questionData.options;
    Object.keys(options).forEach(key => {
        const option = options[key];
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `<label class="option"><input type="radio" name="answer" value="${key}"> ${key}. ${option}</label>`;
        quizContainer.appendChild(optionElement);
    });

    // Handle answer selection
    const optionsElements = document.querySelectorAll('input[name="answer"]');
    optionsElements.forEach(option => {
        option.onclick = function() {
            quizAnswered = true;  // Mark the question as answered
            userAnswers[currentQuestionIndex] = option.value;
        };
    });

    // Handle Next and Back buttons
    document.getElementById("next-btn").onclick = function() {
        if (quizAnswered) {
            showSolution();
            updateNavigation();
        } else {
            alert("Please select an answer before proceeding.");
        }
    };

    document.getElementById("prev-btn").onclick = function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
            updateNavigation();
        }
    };
}

// Show the solution for the current question
function showSolution() {
    const questionData = quizData[currentQuestionIndex];
    const solutionContainer = document.getElementById("solution");

    const correctAnswer = questionData.correctAnswer;
    const userAnswer = userAnswers[currentQuestionIndex];
    let solutionHTML = `<h3>Solution:</h3><p><strong>Correct Answer:</strong> ${correctAnswer}. ${questionData.options[correctAnswer]}</p>`;
    solutionHTML += `<p><strong>Your Answer:</strong> ${userAnswer}. ${questionData.options[userAnswer]}</p>`;
    solutionHTML += `<p>${questionData.solution}</p>`;

    solutionContainer.innerHTML = solutionHTML;
    solutionContainer.style.display = "block";

    // Color the options based on correctness
    const optionsElements = document.querySelectorAll('input[name="answer"]');
    optionsElements.forEach(option => {
        const label = option.parentElement;
        if (option.value === correctAnswer) {
            label.style.backgroundColor = "#28a745";  // Green for correct
        } else if (option.value === userAnswer) {
            label.style.backgroundColor = "#dc3545";  // Red for wrong
        } else {
            label.style.backgroundColor = "";  // Reset color
        }
    });
}

// Update the visibility of navigation buttons
function updateNavigation() {
    document.getElementById("next-btn").style.display = "none";  // Hide Next button after showing solution
    document.getElementById("prev-btn").style.display = "inline"; // Show Back button
    if (currentQuestionIndex === quizData.length - 1) {
        document.getElementById("next-btn").innerHTML = "Finish"; // Change text for the last question
    }
    if (currentQuestionIndex === quizData.length) {
        // Final results or end quiz here
        displayResults();
    }
}

// Display final results
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
