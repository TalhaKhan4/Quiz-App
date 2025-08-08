"use strict";

// *** variables and constants ***

const questionElement = document.querySelector("#question");

const optionElements = Array.from(document.querySelectorAll(".option"));

const overlay = document.querySelector("#overlay");

const questionNumberElement = document.querySelector("#question-num");

const nextBtn = document.querySelector(".next-btn");

const scoreElement = document.querySelector("#score");

const restartBtn = document.querySelector("#restart-btn");

let currentQuestionNum = 0;
let score = 0;

// *** functions ***

// This function randomly sorts any array passed to it

function sortArrRandomly(arr) {
  arr.sort(function () {
    return [-1, 1][Math.floor(Math.random() * 2)];
  });
}

sortArrRandomly(questionsArr);

// This function displays question and its Options

function displayData(questionObj) {
  questionElement.innerHTML = questionObj.question;

  const optionsArr = questionObj.options;
  sortArrRandomly(optionsArr);

  optionElements.forEach(function (optionElement, i) {
    optionElement.textContent = optionsArr[i].option;
  });
}

displayData(questionsArr[currentQuestionNum]);

function showCurrentQuestionNumber() {
  questionNumberElement.textContent =
    "Question " + (currentQuestionNum + 1) + " out of " + questionsArr.length;
}

showCurrentQuestionNumber();

// *** event listeners ***

// event listener on options

optionElements.forEach(function (optionElement, i) {
  optionElement.addEventListener("click", function () {
    if (questionsArr[currentQuestionNum].options[i].isCorrect) {
      // setting green background color on the incorrect option
      optionElement.style.backgroundColor = "#95f3a3";
      score++;
    } else {
      // setting red background color on the incorrect option
      optionElement.style.backgroundColor = "#fa95a3";
      // finding the correct option and setting green color on it
      questionsArr[currentQuestionNum].options.forEach(function (obj, i) {
        if (obj.isCorrect) optionElements[i].style.background = "#95f3a3";
      });
    }

    nextBtn.classList.remove("disabled");
    overlay.style.display = "block";

    if (currentQuestionNum === questionsArr.length - 1) {
      nextBtn.textContent = "Results";
      nextBtn.classList.add("results-btn");
    }
  });
});

// event listener on next button
nextBtn.addEventListener("click", function () {
  if (
    !nextBtn.classList.contains("disabled") &&
    !nextBtn.classList.contains("results-btn")
  ) {
    currentQuestionNum++;
    displayData(questionsArr[currentQuestionNum]);
    overlay.style.display = "none";
    nextBtn.classList.add("disabled");
    showCurrentQuestionNumber();

    optionElements.forEach(function (optionElement) {
      if (
        getComputedStyle(optionElement).backgroundColor !== "rgba(0, 0, 0, 0)"
      ) {
        optionElement.style.backgroundColor = "";
      }
    });
  }

  if (nextBtn.classList.contains("results-btn")) {
    scoreElement.firstElementChild.firstElementChild.textContent =
      "You scored " + score + " out of " + questionsArr.length;
    scoreElement.style.display = "block";
    if (score === questionsArr.length) {
      confettiEffect();
    }
  }
});

// event listener on restart button
restartBtn.addEventListener("click", function () {
  location.reload();
});
