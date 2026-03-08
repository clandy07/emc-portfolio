


function getRandomSpeed() {
  return 0.8 + Math.random() * 0.7;
}

export function LetterDisplay({ word }: { word: string }) {
  return (
    <>
      {word.split('').map((char, i) => (
        <div
          key={i}
          className="letter text-3xl font-semibold xs:text-[60px] md:text-[90px] lg:text-[120px] bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]"
          data-speed={getRandomSpeed()}
        >
          {char}
        </div>
      ))}
    </>
  );
}