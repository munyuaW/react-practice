const Pad = ({ id, color, on, toggle }) => {
  return (
    <button
      className={on ? "on" : ""}
      style={{ backgroundColor: color }}
      onClick={() => toggle(id)}></button>
  );
};

export default Pad;
