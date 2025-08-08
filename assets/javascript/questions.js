"use strict";

const questionsArr = [
  {
    question:
      "Which method removes the last element from an array and returns that element?",
    options: [
      { option: "pop()", isCorrect: true },
      { option: "push()", isCorrect: false },
      { option: "shift()", isCorrect: false },
      { option: "slice()", isCorrect: false },
    ],
  },
  {
    question: "Which method adds a new item to the end of an array? ",
    options: [
      { option: "push()", isCorrect: true },
      { option: "pop()", isCorrect: false },
      { option: "shift()", isCorrect: false },
      { option: "slice()", isCorrect: false },
    ],
  },
  {
    question: "Which method creates a new array based on a selection?",
    options: [
      { option: "slice()", isCorrect: true },
      { option: "shift()", isCorrect: false },
      { option: "indexOf()", isCorrect: false },
      { option: "every()", isCorrect: false },
    ],
  },
  {
    question:
      'let str = "Hello World"; <br>\
    str.lastIndexOf("o");',
    options: [
      { option: "7", isCorrect: true },
      { option: "0", isCorrect: false },
      { option: "-1", isCorrect: false },
      { option: "4", isCorrect: false },
    ],
  },
  {
    question:
      "Which array method performs a function that you provide on each element in that array, and returns only those elements that pass the test implemented by that function?",
    options: [
      { option: "filter()", isCorrect: true },
      { option: "every()", isCorrect: false },
      { option: "map()", isCorrect: false },
      { option: "forEach()", isCorrect: false },
    ],
  },
  {
    question: "What is an object in Javascript?",
    options: [
      {
        option: "It is a way to structure data and functions",
        isCorrect: true,
      },
      { option: "It is a prototype", isCorrect: false },
      { option: "It is an extendable class", isCorrect: false },
      {
        option: "It is a conceptual way of thinking of programming",
        isCorrect: false,
      },
    ],
  },
  {
    question: "How do we get an Array's length?",
    options: [
      {
        option: "array.length",
        isCorrect: true,
      },
      { option: "array.size", isCorrect: false },
      { option: "array.elementsCount", isCorrect: false },
      {
        option: "array.totalElements",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which of the following function types allow implicit return?",
    options: [
      {
        option: "Arrow Functions",
        isCorrect: true,
      },
      { option: "Function Declarations", isCorrect: false },
      { option: "Function Expressions", isCorrect: false },
      {
        option: "Immediately Invoked Function Expressions",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which of the following operators returns true only when both sides of the expression are true?",
    options: [
      {
        option: "AND (&&)",
        isCorrect: true,
      },
      { option: "OR (||)", isCorrect: false },
      { option: "NOT (!)", isCorrect: false },
      {
        option: "Nullish Coalescing (??)",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      'What will be printed in the console? <br>\
    console.log(10 + "5");',
    options: [
      {
        option: '"105"',
        isCorrect: true,
      },
      { option: "15", isCorrect: false },
      { option: "105", isCorrect: false },
      {
        option: "NaN",
        isCorrect: false,
      },
    ],
  },

  {
    question:
      "let score = 0; <br>\
score = score || 100; <br>\
console.log(score);",
    options: [
      {
        option: "100",
        isCorrect: true,
      },
      { option: "0", isCorrect: false },
      { option: "undefined", isCorrect: false },
      {
        option: "true",
        isCorrect: false,
      },
    ],
  },

  {
    question: "How many primitive data types are there in javaScript?",
    options: [
      {
        option: "7",
        isCorrect: true,
      },
      { option: "8", isCorrect: false },
      { option: "5", isCorrect: false },
      { option: "6", isCorrect: false },
    ],
  },
];
