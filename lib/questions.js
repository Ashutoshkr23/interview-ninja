// questions.js
const questions = {
    q1: {
      question: "What is JavaScript?",
      answer: "JavaScript is a high-level, interpreted programming language primarily used for creating interactive effects within web browsers. It enables dynamic content on web pages, such as updating content, handling user interactions, and much more."
    },
    q2: {
      question: "What are the different data types supported by JavaScript?",
      answer: "JavaScript supports several data types, including numbers, strings, booleans, arrays, objects, functions, and undefined."
    },
    q3: {
      question: "What is the difference between == and === operators in JavaScript?",
      answer: "The == operator checks for equality after performing type coercion, whereas the === operator checks for strict equality without type coercion. In other words, === requires both the value and the type to be the same for two operands to be considered equal."
    },
    q4: {
      question: "What is the difference between let, const, and var in JavaScript for declaring variables?",
      answer: "var is function-scoped and can be redeclared and reassigned. let is block-scoped, can be reassigned, but cannot be redeclared in the same scope. const is also block-scoped but cannot be reassigned or redeclared once initialized."
    },
    q5: {
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function bundled together with its lexical environment. It allows a function to access variables from its outer scope even after the outer function has finished executing."
    },
    q6: {
      question: "What is event bubbling in JavaScript?",
      answer: "Event bubbling is a phenomenon in which an event triggered on a child element is propagated up through its ancestors in the DOM tree. This means that if you have a click event on a child element, the same event will also be triggered on its parent elements."
    },
    q7: {
      question: "Explain the concept of hoisting in JavaScript.",
      answer: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This allows you to use variables and functions before they have been declared."
    },
    q8: {
      question: "How can you handle errors in JavaScript?",
      answer: "Errors in JavaScript can be handled using try...catch statements. The code that may throw an error is placed inside the try block, and if an error occurs, it is caught and handled in the catch block."
    },
    q9: {
      question: "What is the difference between null and undefined in JavaScript?",
      answer: "`null` is a value that represents the intentional absence of any object value, while `undefined` is a primitive value automatically assigned to variables that have been declared but not assigned a value."
    },
    q10: {
      question: "How do you convert a string to a number in JavaScript?",
      answer: "You can convert a string to a number in JavaScript using functions like parseInt() or parseFloat() for integer or floating-point conversions, respectively. Additionally, using the Number() constructor or unary plus operator (+) can also perform string-to-number conversion."
    }
  };
  
  export default questions;
  