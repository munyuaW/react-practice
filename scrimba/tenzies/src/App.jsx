import { useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());
  function getRandomNum() {
    return Math.floor(Math.random() * 6 + 1);
  }

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: getRandomNum(),
      isHeld: false,
    }));
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  const diceElems = dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} />);

  return (
    <main>
      <div className="dice-container">{diceElems}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
