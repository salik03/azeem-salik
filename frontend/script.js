const questions = [
    {
        question: "How do you typically start your day?",
        options: ["A) With a hearty breakfast", "B) By hitting the snooze button", "C) With some morning exercise", "D) Checking my phone/social media"]
    },
    {
        question: "What's your favorite way to relax?",
        options: ["A) Taking a long bath", "B) Watching TV or movies", "C) Going for a walk", "D) Hanging out with friends"]
    },
    {
        question: "How do you handle conflicts?",
        options: ["A) Calmly discuss the issue", "B) Avoid and ignore it", "C) Get a bit grumpy but resolve it", "D) Make jokes to lighten the mood"]
    },
    {
        question: "What's your favorite food?",
        options: ["A) Something hearty and filling", "B) Junk food/snacks", "C) Healthy options", "D) Anything as long as it's delicious"]
    },
    {
        question: "What's your dream vacation spot?",
        options: ["A) A quiet countryside", "B) A bustling city", "C) Somewhere adventurous", "D) A beach resort"]
    },
    {
        question: "How would your friends describe you?",
        options: ["A) Loyal and protective", "B) Easy-going and fun", "C) Strong and determined", "D) Friendly and humorous"]
    },
    {
        question: "What's your favorite type of music?",
        options: ["A) Classic rock", "B) Pop", "C) Country", "D) Comedy songs"]
    }
];

const results = {
    "A": "Shrek",
    "B": "Patrick Star",
    "C": "Shrek (Heroic)",
    "D": "Patrick Star (Social)",
    "A&B": "Shrek (Playful)",
    "A&C": "Shrek (Wisdom)",
    "A&D": "Shrek (Friendly)",
    "B&C": "Patrick Star (Determined)",
    "B&D": "Patrick Star (Creative)",
    "C&D": "Shrek (Adventurous)",
    "A&B&C": "Shrek (Balanced)",
    "A&B&D": "Shrek-Patrick Fusion (Playful)",
    "A&C&D": "Shrek-Patrick Fusion (Adventurous)",
    "B&C&D": "Patrick Star (All-Rounder)",
    "A&B&C&D": "Shrek-Patrick Fusion"
};

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function buildQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const options = [];
        currentQuestion.options.forEach((option, optionNumber) => {
            options.push(
                `<li>
                    <label>
                        <input type="radio" name="question${questionNumber}" value="${option[0]}">
                        ${option}
                    </label>
                </li>`
            );
        });
        output.push(
            `<div class="question">
                <h3>${currentQuestion.question}</h3>
                <ul class="options">${options.join('')}</ul>
            </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function calculateResult() {
    const answers = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answer = document.querySelector(`input[name=question${questionNumber}]:checked`);
        if (answer) {
            answers.push(answer.value);
        }
    });

    const answerCounts = answers.reduce((acc, answer) => {
        acc[answer] = (acc[answer] || 0) + 1;
        return acc;
    }, {});

    const maxCount = Math.max(...Object.values(answerCounts));
    const topAnswers = Object.keys(answerCounts).filter(key => answerCounts[key] === maxCount);

    let result;
    if (topAnswers.length === 1) {
        result = results[topAnswers[0]];
    } else {
        result = results[topAnswers.sort().join('&')] || results["A&B&C&D"];
    }

    displayResult(result);
}

function displayResult(result) {
    let imageUrl;
    if (result.startsWith("Shrek")) {
        imageUrl = "https://i.pinimg.com/564x/4d/6c/f5/4d6cf548194403233b89925593b93439.jpg";
    } else {
        imageUrl = "https://w0.peakpx.com/wallpaper/976/653/HD-wallpaper-patrick-patrick-star-spongebob-patrick-star-face.jpg";
    }

    resultContainer.innerHTML = `
        <h3>You are: ${result}!</h3>
        <img src="${imageUrl}" alt="${result}">
    `;
}

buildQuiz();

submitButton.addEventListener('click', calculateResult);