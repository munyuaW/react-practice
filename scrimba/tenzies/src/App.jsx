import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const { width, height } = useWindowSize();
  const btnRef = useRef(null);

  // derived state
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) btnRef.current.focus();
  }, [gameWon]);

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
    if (gameWon) {
      setDice(generateAllNewDice());
    } else {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.isHeld ? die : { ...die, value: getRandomNum() },
        ),
      );
    }
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
      {gameWon && <Confetti width={width} height={height} recycle={false} />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won. Press 'New Game' to play again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>

      <div className="dice-container">{diceElems}</div>
      <button ref={btnRef} className="roll-btn" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
