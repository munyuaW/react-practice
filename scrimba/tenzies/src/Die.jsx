const Die = ({ value, isHeld }) => {
  return (
    <button
      className="die-btn"
      style={{ backgroundColor: isHeld ? "#59e391" : "white" }}>
      {value}
    </button>
  );
};

export default Die;
