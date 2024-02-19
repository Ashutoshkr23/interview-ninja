// pages/YourPage.tsx

import React from 'react';
import ChooseMode from '@/Components/Cards/ChooseMode';

const YourPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white items-center justify-between p-24">
      <h1 className="text-[60px]">Choose Mode</h1>
      <div className='flex items-center justify-around w-full mt-20'>
        {/* Pass props to ChooseMode component */}
        <ChooseMode heading="Practice " text="Practice interview question , from our most asked question Liblary" link="/practice" />
        <ChooseMode heading="Simulation" text="Practice Interview question , with real life simulation " link="/interview" />
      </div>
    </main>
  );
};

export default YourPage;



