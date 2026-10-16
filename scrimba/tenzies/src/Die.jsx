const Die = ({ id, value, isHeld, hold }) => {
  return (
    <button
      className="die-btn"
      style={{ backgroundColor: isHeld ? "#59e391" : "white" }}
      onClick={() => hold(id)}
      aria-label={`Die with value ${value}`}
      aria-pressed={isHeld}>
      {value}
    </button>
  );
};

export default Die;
