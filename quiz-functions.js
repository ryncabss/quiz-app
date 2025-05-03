// Function to load the question from quizData
function loadQuestion(currentQuestionIndex) {
    const questionContainer = document.querySelector('.question-container');
    const solutionContainer = document.querySelector('.solution p');
    const questionData = quizData[currentQuestionIndex];

    // Display question and options dynamically
    questionContainer.innerHTML = `
        <p class="question">${questionData.question}</p>
        ${questionData.options.map((option) => `
            <button class="answer-btn" onclick="checkAnswer(this, '${option.answer.charAt(0)}')">${option.answer}</button>
        `).join('')}
    `;

    // Display solution text, but keep hidden until an answer is selected
    solutionContainer.innerHTML = questionData.solution;
    document.querySelector('.solution').style.display = 'none'; // Hide solution initially
}

// Function to check the selected answer
function checkAnswer(button, selectedAnswer) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.disabled = true; // Disable all buttons after answering
    });

    const correctAnswer = quizData[currentQuestionIndex].options.find(option => option.correct);
    button.classList.add(selectedAnswer === correctAnswer.answer.charAt(0) ? 'correct' : 'wrong');
    
    if (selectedAnswer !== correctAnswer.answer.charAt(0)) {
        document.querySelector(`.answer-btn.${correctAnswer.answer.charAt(0)}`).classList.add('correct'); // Highlight the correct answer
    }

    // Show the solution
    document.querySelector('.solution').style.display = 'block';
}

// Function to finish the quiz
function finishQuiz() {
    alert('You have finished the quiz!');
}

// Function to restart the quiz and shuffle the questions
function restartQuiz() {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.disabled = false; // Enable buttons again
        btn.classList.remove('correct', 'wrong');
    });

    // Hide the solution and reset UI
    document.querySelector('.solution').style.display = 'none';

    // Shuffle questions for a new session
    quizData.sort(() => Math.random() - 0.5); // Shuffle questions

    currentQuestionIndex = 0; // Reset to first question
    loadQuestion(currentQuestionIndex); // Load the first question
}

// Initialize the quiz with the first question
function initializeQuiz() {
    loadQuestion(currentQuestionIndex);
}
