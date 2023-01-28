import React, { useState } from "react";

const Game = () => {
  const [counter, setCounter] = useState(0);
  const [player1, setPlayer1] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  const incrementCounter = (increment) => {
    if (!gameOver) {
      setCounter(counter + increment);
      if (counter + increment >= 10) {
        setGameOver(true);
        setCounter(0);
        setWinner(player1 ? "Player 1" : "Player 2");
      } else {
        setPlayer1(!player1);
      }
    }
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      {!gameOver && (
        <>
          <h2>{player1 ? "Player 1" : "Player 2"}'s turn</h2>
          <button onClick={() => incrementCounter(1)}>Increment by 1</button>
          <button onClick={() => incrementCounter(2)}>Increment by 2</button>
        </>
      )}
      {gameOver && <h2>{winner} wins!</h2>}
    </div>
  );
};

export default Game;
