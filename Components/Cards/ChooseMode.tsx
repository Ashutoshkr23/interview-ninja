import React from 'react';
import Link from 'next/link';

interface ChooseModeProps {
  heading: string;
  text: string;
  link: string;
}

const ChooseMode: React.FC<ChooseModeProps> = ({ heading, text, link }) => {
  return (
    <div className='bg-[#FFF] text-black h-[300px] w-[200px] rounded-md flex flex-col  items-center p-8'>
      <h2 className='text-2xl'>{heading}</h2>
      <p className='text-sm mt-8'>{text}</p>
      <Link className="text-2xl w-40 h-10 rounded-md text-black bg-white hover:bg-gray-400 flex justify-center items-center" href={link}>Start Now</Link> 
    </div>
  );
};

export default ChooseMode;


