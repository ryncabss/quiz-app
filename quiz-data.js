const quizData = [
    {
        question: "What is the unit of Young's Modulus?",
        options: ["Pa", "Nm²", "kg/m³", "m/s²"],
        correctAnswer: "Pa"
    },
    {
        question: "Which material is known as the 'King of Building Materials'?",
        options: ["Wood", "Concrete", "Steel", "Brick"],
        correctAnswer: "Concrete"
    },
    {
        question: "What is the main purpose of a retaining wall?",
        options: ["To support a structure", "To hold back soil", "To provide insulation", "To divide spaces"],
        correctAnswer: "To hold back soil"
    },
    // Add more questions as needed
];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
