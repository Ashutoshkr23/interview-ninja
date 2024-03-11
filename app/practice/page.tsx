"use client"
import React, { useState } from 'react';
import questions from "@/lib/questions"
import Question from "@/Components/Cards/Practice/Question";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleStart = () => {
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleEnd = () => {
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
  };

  return (
    <div className="h-screen w-full bg-slate-900">
    <div className="w-full p-20 h-4/5 flex gap-10 flex-grow">
      <div className="bg-gray-500  w-1/2 h-full rounded-3xl">
        <Question
        question={questions[currentQuestionIndex].question}
        answer={questions[currentQuestionIndex].answer}
        showAnswer={showAnswer}
        />
      </div>
      <div className="bg-zinc-500 h-full w-1/2 rounded-3xl">
        <h1>Camera section </h1>
      </div>
    </div>
    <div className='flex justify-center gap-20     '>
      <button className='h-10 w-32 rounded-md bg-black hover:bg-slate-700' onClick={handleNext}>Next</button>
      <button className='h-10 w-32 rounded-md bg-black hover:bg-slate-700' onClick={handleShowAnswer}>Show Answer</button>
      <button className='h-10 w-32 rounded-md bg-black hover:bg-slate-700' onClick={handleEnd}>End</button>
    </div>
  </div>
  );
};

export default QuizPage;


