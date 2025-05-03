const questions = [
  {
    text: "1. Of the 20 men, 5 belong to A, 7 to B, and 9 to C...",
    choices: [
      { text: "a. 6", correct: false },
      { text: "b. 7", correct: false },
      { text: "c. 5", correct: true },
      { text: "d. 8", correct: false }
    ],
    solution: `<strong>Solution:</strong> <p>...Therefore, 20 - 14 = <strong>5 men belong to none</strong>.</p>`
  },
  {
    text: "2. What is the capital of France?",
    choices: [
      { text: "a. Berlin", correct: false },
      { text: "b. Madrid", correct: false },
      { text: "c. Paris", correct: true },
      { text: "d. Rome", correct: false }
    ],
    solution: `<strong>Solution:</strong><p>The capital of France is <strong>Paris</strong>.</p>`
  },
  {
    text: "3. What is 2 + 2?",
    choices: [
      { text: "a. 3", correct: false },
      { text: "b. 4", correct: true },
      { text: "c. 5", correct: false },
      { text: "d. 22", correct: false }
    ],
    solution: `<strong>Solution:</strong><p>2 + 2 = <strong>4</strong>.</p>`
  }
];