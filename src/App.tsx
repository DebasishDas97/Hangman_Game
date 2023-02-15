import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const App: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessLetters, setGuessLetters] = useState<string[]>([]);

  const inCorrectLetters = guessLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((word) => guessLetters.includes(word));

  const addGuessedLetter = useCallback(
    (key: string) => {
      if (guessLetters.includes(key) || isLoser || isWinner) return;
      setGuessLetters((prevLetters) => [...prevLetters, key]);
    },
    [guessLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-zA-Z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => document.removeEventListener("keypress", handler);
  }, [guessLetters]);

  return (
    <div className="flex flex-col gap-8 max-w-[800px] items-center mx-auto my-0">
      <h1 className="text-6xl font-semiboldbold">Hangman Game</h1>
      <div className="text-3xl text-center">
        {isWinner && "Congratulations🎊! You Won. Refresh to play again."}
        {isLoser && "Sorry, you lost🙇‍♂️. Refresh to play again"}
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord isLoser={isLoser} guessLetters={guessLetters} wordToGuess={wordToGuess} />
      <div className="self-stretch px-5">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inActiveLetters={inCorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default App;
