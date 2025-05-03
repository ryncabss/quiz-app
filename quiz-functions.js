let currentQuestion = 0;
function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-number").innerText = `Question ${currentQuestion + 1}`;
  document.getElementById("question-text").innerText = q.text;
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  document.getElementById("answer").innerText = "";
  document.getElementById("answer").style.color = "";
  document.getElementById("solution").style.display = "none";
  document.getElementById("solutionBtn").style.display = "none";
  document.getElementById("solution").innerHTML = q.solution;
  q.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.style.marginBottom = "10px";
    btn.onclick = () => checkAnswer(btn, choice.correct);
    choicesContainer.appendChild(btn);
    choicesContainer.appendChild(document.createElement("br"));
  });
  document.getElementById("prevBtn").style.display = currentQuestion > 0 ? "inline-block" : "none";
  document.getElementById("nextBtn").style.display = currentQuestion < questions.length - 1 ? "inline-block" : "none";
  document.getElementById("restartBtn").style.display = currentQuestion === questions.length - 1 ? "inline-block" : "none";
}
function checkAnswer(btn, isCorrect) {
  const buttons = document.querySelectorAll('#choices button');
  buttons.forEach(b => b.disabled = true);
  const answerText = document.getElementById("answer");
  if (isCorrect) {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    answerText.innerText = "Correct!";
    answerText.style.color = "green";
  } else {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    answerText.innerText = "Incorrect.";
    answerText.style.color = "red";
    const correctBtn = Array.from(buttons).find(b =>
      questions[currentQuestion].choices.find(c => c.text === b.innerText && c.correct)
    );
    if (correctBtn) {
      correctBtn.style.backgroundColor = "green";
      correctBtn.style.color = "white";
    }
  }
  document.getElementById("solutionBtn").style.display = "inline-block";
}
function toggleSolution() {
  const sol = document.getElementById("solution");
  sol.style.display = sol.style.display === "none" ? "block" : "none";
}
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
}
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}
function restartQuiz() {
  currentQuestion = 0;
  loadQuestion();
}
window.onload = loadQuestion;