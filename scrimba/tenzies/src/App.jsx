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
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: getRandomNum() },
      ),
    );
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  const diceElems = dice.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      hold={hold}
    />
  ));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>

      <div className="dice-container">{diceElems}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
