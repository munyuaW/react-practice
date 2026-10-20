import { useState } from "react";
import { languages } from "./languages";
import clsx from "clsx";
export default function App() {
  // State values
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLeters] = useState([]);

  // Derived values
  const wrongGuessCount = guessedLetters.filter(
    (l) => !currentWord.includes(l),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((l) => guessedLetters.includes(l));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameover = isGameWon || isGameLost;

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const langElems = languages.map((lang, index) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    const isLost = index < wrongGuessCount;

    return (
      <span
        key={lang.name}
        style={styles}
        className={clsx("chip", isLost && "lost")}>
        {lang.name}
      </span>
    );
  });

  const letters = currentWord
    .split("")
    .map((l, index) => (
      <span key={index}>
        {guessedLetters.includes(l) ? l.toUpperCase() : ""}
      </span>
    ));

  const keyboardBtns = alphabet.split("").map((l) => {
    const isGuessed = guessedLetters.includes(l);
    const isCorrect = isGuessed && currentWord.includes(l);
    const isWrong = isGuessed && !currentWord.includes(l);
    return (
      <button
        className={clsx({ correct: isCorrect, wrong: isWrong })}
        key={l}
        onClick={() => addGuessedLetter(l)}>
        {l.toUpperCase()}
      </button>
    );
  });

  function addGuessedLetter(letter) {
    setGuessedLeters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  }

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the progamming world
          Assembly!
        </p>
      </header>
      <section
        className={clsx("game-status", {
          lost: isGameLost,
          won: isGameWon,
        })}>
        {isGameWon && (
          <>
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
          </>
        )}
        {isGameLost && (
          <>
            <h2>Game over!</h2>
            <p>You lose. You better start learning Assembly</p>
          </>
        )}
      </section>
      <section className="languages">{langElems}</section>
      <section className="currentWord">{letters}</section>
      <section className="keyboard">{keyboardBtns}</section>
      {isGameover && <button className="new-game">New Game</button>}
    </main>
  );
}
