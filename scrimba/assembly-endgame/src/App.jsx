import { useState } from "react";
import { languages } from "./languages";
import clsx from "clsx";
export default function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLeters] = useState([]);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const langElems = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span key={lang.name} style={styles} className="chip">
        {lang.name}
      </span>
    );
  });

  const letters = currentWord
    .split("")
    .map((l, index) => <span key={index}>{l.toUpperCase()}</span>);

  const keyboardBtns = alphabet.split("").map((l) => (
    <button key={l} onClick={() => addGuessedLetter(l)}>
      {l.toUpperCase()}
    </button>
  ));

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
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="languages">{langElems}</section>
      <section className="currentWord">{letters}</section>
      <section className="keyboard">{keyboardBtns}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}
