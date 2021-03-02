// const questions = [
//   {
//     "pic-url": "sample.jpeg",
//     title: "rachel-birth",
//     question: "What is the name of Ross and Rachel's baby?",
//     answers: [
//       { value: 0, answer: "Susan" },
//       { value: 0, answer: "Ashley" },
//       { value: 0, answer: "Emily" },
//       { value: 5, answer: "Emma" },
//     ],
//   },
//   {
//     "pic-url": "group-picture.jpeg",
//     title: "city",
//     question: "Which city did the show take place in?",
//     answers: [
//       { value: 0, answer: "Boston" },
//       { value: 0, answer: "Chicago" },
//       { value: 0, answer: "San Diego" },
//       { value: 5, answer: "New York City" },
//     ],
//   },
// ];

//Queing up the game with the start button

const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container"); //allows questions to be shown
const gameQuestions = document.getElementById("questions");
// const shuffleQuestions, currentQuestionsIndex;

startButton.addEventListener("click", startGame);
// function to start the game
function startGame() {
  console.log("started");
  startButton.classList.add("hide"); //hiding start button
  //   shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  //   currentQuestionsIndex = 0;
  questionContainerElement.classList.remove("hide"); //shows question
  setNextQuestion();
}

//function to set next question

function setNextQuestion() {}

// function for answer

function selectAnswer() {}

const questions = [
  {
    question: "Which city did the show take place in?",
    answers: [
      { value: 0, answer: "Boston" },
      { value: 0, answer: "Chicago" },
      { value: 0, answer: "San Diego" },
      { value: 5, answer: "New York City" },
    ],
  },
];
