interface HangmanWordProps {
  guessLetters: string[];
  wordToGuess: string;
  isLoser?: boolean;
}

const HangmanWord = ({
  guessLetters,
  wordToGuess,
  isLoser = false,
}: HangmanWordProps) => {
  return (
    <div className="flex gap-1 text-6xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter) => (
        <span className="border-b-4 border-black" key={crypto.randomUUID()}>
          <span
            className={`${
              isLoser && !guessLetters.includes(letter)
                ? "text-red-500"
                : "text-black"
            } ${
              guessLetters.includes(letter) || isLoser ? "visible" : "invisible"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;


// {wordToGuess.split("").map((letter, index) => (
//   <span style={{ borderBottom: ".1em solid black" }} key={index}>
//     <span
//       style={{
//         visibility:
//           guessLetters.includes(letter) || isLoser
//             ? "visible"
//             : "hidden",
//         color:
//           !guessLetters.includes(letter) && isLoser ? "red" : "black",
//       }}
//     >
//       {letter}
//     </span>
//   </span>
// ))}