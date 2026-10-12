import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");
  const getColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <input onChange={getColor} type="color" value={color} />
    </div>
  );
}

export default App;
