'use client';

import { useNavigate } from 'react-router-dom';
import { TypewriterEffect } from '../../../shared/ui/typewriter-effect';

const words = [
  {
    text: 'Make',
  },
  {
    text: 'your',
  },
  {
    text: 'wish',
  },
  {
    text: 'come',
  },
  {
    text: 'true',
  },
  {
    text: 'effectively.',
    className: 'text-blue-500 dark:text-blue-500',
  },
];

export function TypewriterHello() {
  const navigate = useNavigate();

  const handlePressJoin = () => {
    navigate('/login');
  };

  const handlePressSignUp = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-400 dark:text-neutral-200 text-base  mb-10">
        The tool for implementation
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button
          onClick={handlePressJoin}
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm"
        >
          Join now
        </button>
        <button
          onClick={handlePressSignUp}
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
