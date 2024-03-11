import React from 'react'

interface QuestionProps{
  question : string;
  answer : string;
  showAnswer : boolean;
}
const Question = ({question , answer , showAnswer}: QuestionProps) => {
  return (
    <div className='h-full flex justify-center items-center p-20'>
      <div className='w-full h-4/5 '>
        <div className='h-1/3 bg-slate-800 rounded-md w-full flex justify-center items-center'>
        <p className='text-2xl'>{question}</p>
        </div>

        {showAnswer && (
            <div className='h-1/3 mt-20 bg-slate-800 rounded-md w-full flex justify-center items-center p-20'>
            <p className='text-2xl'>{answer}</p>
            </div>
          )}

      </div>
      
    </div>
  )
}

export default Question
