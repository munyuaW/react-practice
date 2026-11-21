import { useState } from "react";

type Button = {
  value: string | null;
  onClick: () => void;
};

function Board() {
  const [currentBtns, setCurrentBtns] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winnerData = calculateWnner(currentBtns);
  const winner = winnerData?.winner;
  const winningBtns = winnerData?.winningBtns || [];
  const isDraw = !winner && !currentBtns.includes(null);
  const status =
    winner ? `Winner: ${winner}`
    : isDraw ? "It is a draw!"
    : `Next Player: ${xIsNext ? "X" : "O"}`;

  function Button({ value, onClick }: Button) {
    return (
      <button
        className="size-13 border rounded text-lg font-bold cursor-pointer"
        onClick={onClick}>
        {value}
      </button>
    );
  }

  function handleClick(i: number) {
    if (currentBtns[i] || winner) return;

    const nextBtns = currentBtns.slice();
    if (xIsNext) {
      nextBtns[i] = "X";
    } else {
      nextBtns[i] = "O";
    }
    setCurrentBtns(nextBtns);
    setXIsNext((prev) => !prev);
  }

  function calculateWnner(btns: (string | null)[]) {
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < possibleWins.length; i++) {
      const [a, b, c] = possibleWins[i];
      if (btns[a] && btns[a] === btns[b] && btns[a] === btns[c]) {
        return {
          winner: btns[a],
          winningBtns: [a, b, c],
        };
      }
    }

    return null;
  }

  function handleReset() {
    setCurrentBtns(Array(9).fill(null));
    setXIsNext(true);
  }
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-5">Tic-Tac-Toe</h1>
      <h3 className="text-lg font-semibold mb-1.5">{status}</h3>
      <div className="grid grid-cols-3 gap-2">
        <Button value={currentBtns[0]} onClick={() => handleClick(0)} />
        <Button value={currentBtns[1]} onClick={() => handleClick(1)} />
        <Button value={currentBtns[2]} onClick={() => handleClick(2)} />
        <Button value={currentBtns[3]} onClick={() => handleClick(3)} />
        <Button value={currentBtns[4]} onClick={() => handleClick(4)} />
        <Button value={currentBtns[5]} onClick={() => handleClick(5)} />
        <Button value={currentBtns[6]} onClick={() => handleClick(6)} />
        <Button value={currentBtns[7]} onClick={() => handleClick(7)} />
        <Button value={currentBtns[8]} onClick={() => handleClick(8)} />
      </div>
      <button
        className="font-semibold mt-2 bg-gray-300 rounded py-1 px-2 cursor-pointer"
        onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Board />
    </div>
  );
}

export default App;
