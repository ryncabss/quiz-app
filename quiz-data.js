const quizData = [
    {
        question: "What is the unit of Young's Modulus?",
        options: {
            A: "Pa",
            B: "Nm²",
            C: "kg/m³",
            D: "m/s²"
        },
        correctAnswer: "A",
        solution: "Young's Modulus is a measure of the stiffness of a material, and its unit is Pascals (Pa)."
    },
    {
        question: "Which material is known as the 'King of Building Materials'?",
        options: {
            A: "Wood",
            B: "Concrete",
            C: "Steel",
            D: "Brick"
        },
        correctAnswer: "B",
        solution: "Concrete is widely used in construction and is considered the most important building material."
    },
    {
        question: "What is the main purpose of a retaining wall?",
        options: {
            A: "To support a structure",
            B: "To hold back soil",
            C: "To provide insulation",
            D: "To divide spaces"
        },
        correctAnswer: "B",
        solution: "A retaining wall is designed to resist the lateral pressure of soil or rock when there is a change in ground elevation."
    }
];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
