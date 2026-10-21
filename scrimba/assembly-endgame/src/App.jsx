import { useState } from "react";
import { languages } from "./languages";
import clsx from "clsx";
import { getFarewellText, getRandomWord } from "./utils";
import Confetti from "react-confetti";

export default function App() {
  // State values
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLeters] = useState([]);

  // Derived values
  const numGuessesLeft = languages.length - 1;
  const wrongGuessCount = guessedLetters.filter(
    (l) => !currentWord.includes(l),
  ).length;

  const lastGuess = guessedLetters[guessedLetters.length - 1];
  const incorrectGuess = lastGuess && !currentWord.includes(lastGuess);

  const isGameWon = currentWord
    .split("")
    .every((l) => guessedLetters.includes(l));
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameOver = isGameWon || isGameLost;

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

  const letters =
    isGameLost ?
      currentWord
        .split("")
        .map((l) => (
          <span className={clsx({ missed: !guessedLetters.includes(l) })}>
            {l.toUpperCase()}
          </span>
        ))
    : currentWord
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
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(l)}
        aria-label={`Letter ${l}`}
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

  function renderGameStatus() {
    if (!isGameOver && incorrectGuess) {
      return <p>{getFarewellText(languages[wrongGuessCount - 1].name)}</p>;
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    }

    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose. You better start learning Assembly</p>
        </>
      );
    }
  }

  function resetGame() {
    setCurrentWord(getRandomWord());
    setGuessedLeters([]);
  }

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
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
          farewell: !isGameOver && incorrectGuess,
        })}
        aria-live="polite"
        role="status">
        {renderGameStatus()}
      </section>

      {/* Combined visually-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuess) ?
            `Correct! The letter ${lastGuess} is in the word.`
          : `Sorry, the letter ${lastGuess} is not in the word.`}
          You have {numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank.",
            )
            .join(" ")}
        </p>
      </section>

      <section className="languages">{langElems}</section>
      <section className="currentWord">{letters}</section>
      <section className="keyboard">{keyboardBtns}</section>
      {isGameOver && (
        <button onClick={resetGame} className="new-game">
          New Game
        </button>
      )}
    </main>
  );
}
