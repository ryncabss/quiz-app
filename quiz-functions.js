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
        optionElement.innerHTML = `<label><input type="radio" name="answer" value="${key}"> ${key}. ${option}</label>`;
        quizContainer.appendChild(optionElement);
    });

    // Show solution and next button only if the question is answered
    solutionContainer.style.display = "none";  // Hide solution initially
    quizAnswered = false; // Reset the quizAnswered flag

    document.getElementById("next-btn").onclick = function() {
        if (quizAnswered) {
            // Show solution and enable navigation
            showSolution();
            updateNavigation();
        } else {
            alert("Please select an answer before proceeding.");
        }
    };

    // Handle back navigation
    document.getElementById("prev-btn").onclick = function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
            updateNavigation();
        }
    };

    // Handle answer selection
    const optionsElements = document.querySelectorAll('input[name="answer"]');
    optionsElements.forEach(option => {
        option.onclick = function() {
            quizAnswered = true;  // Mark the question as answered
            userAnswers[currentQuestionIndex] = option.value;
        };
    });
}

// Show the solution for the current question
function showSolution() {
    const questionData = quizData[currentQuestionIndex];
    const solutionContainer = document.getElementById("solution");

    // Display the correct answer
    const correctAnswer = questionData.correctAnswer;
    const userAnswer = userAnswers[currentQuestionIndex];
    let solutionHTML = `<h3>Solution:</h3><p><strong>Correct Answer:</strong> ${correctAnswer}. ${questionData.options[correctAnswer]}</p>`;
    solutionHTML += `<p><strong>Your Answer:</strong> ${userAnswer}. ${questionData.options[userAnswer]}</p>`;
    solutionHTML += `<p>${questionData.solution}</p>`;

    solutionContainer.innerHTML = solutionHTML;
    solutionContainer.style.display = "block";
}

// Update the visibility of navigation buttons
function updateNavigation() {
    document.getElementById("next-btn").style
