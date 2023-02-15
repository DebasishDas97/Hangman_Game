import { KEYS } from "../constants/Keys";

interface KeyboardProps {
  activeLetters: string[];
  addGuessedLetter: (key: string) => void;
  inActiveLetters: string[];
  disabled: boolean;
}

const Keyboard = ({
  activeLetters,
  addGuessedLetter,
  inActiveLetters,
  disabled,
}: KeyboardProps) => {
  return (
    <div className="grid grid-cols-10 gap-3 mb-5 flex-wrap">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`w-[100%] border-black border-2 aspect-square text-xl rounded-sm uppercase p-2 font-bold cursor-pointer enabled:hover:bg-cyan-200 ${
              isActive ? "bg-cyan-200" : ""
            } ${isInActive ? "opacity-30" : ""}`}
            key={key}
            disabled={isInActive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;

// active {
//     bg- HTMLSlotElement(200, 100%, 50%)
// }

// inactive {
//     opacity: .3
// }
