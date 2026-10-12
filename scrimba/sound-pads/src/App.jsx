import Pad from "./Pad";
import padsData from "./pads";
import { useState } from "react";

export default function App() {
  const [pads, setPads] = useState(padsData);
  const btnElems = pads.map(({ id, color, on }) => (
    <Pad key={id} id={id} color={color} on={on} toggle={toggle} />
  ));

  function toggle(id) {
    setPads(pads.map((pad) => (pad.id === id ? { ...pad, on: !pad.on } : pad)));
  }

  return (
    <main>
      <div className="pad-container">{btnElems}</div>
    </main>
  );
}
