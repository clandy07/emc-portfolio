
import React from 'react';


function getRandomSpeed() {
  return 0.8 + Math.random() * 0.7;
}

export function LetterDisplay({ word }: { word: string }) {
  return (
    <>
      {word.split('').map((char, i) => (
        <div
          key={i}
          className="letter text-3xl font-semibold xs:text-[60px] md:text-[120px] text-blue-400"
          data-speed={getRandomSpeed()}
        >
          {char}
        </div>
      ))}
    </>
  );
}