import { useState } from "react";

const Joke = ({ setup, punchline }) => {
  const [isShown, setIsShown] = useState(false);
  const toggleIsShown = () => {
    setIsShown(!isShown);
    console.log(isShown);
  };

  return (
    <div>
      {setup && <h3>{setup}</h3>}
      {/* Instead of using a conditional AND, we can use a ternary operator */}
      {isShown ?
        <p>{punchline}</p>
      : null}
      <button onClick={toggleIsShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
    </div>
  );
};

export default Joke;
