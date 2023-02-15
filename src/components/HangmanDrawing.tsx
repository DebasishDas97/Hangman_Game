import { HEAD, BODY, LEFT_ARM, RIGHT_ARM, RIGHT_LEG, LEFT_LEG } from "../constants/DrwaingConstants";

const BODY_PARTS = [HEAD, BODY,RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

interface HangmanDrawingProps {
    numberOfGuesses: number,
}

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
  return (
    <div className="relative ">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="absolute right-0 h-[50px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[400px] w-3 bg-black ml-[120px]" />
      <div className="h-3 w-64 bg-black" />
    </div>
  );
};

export default HangmanDrawing;
