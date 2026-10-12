import { useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(e) {
    const { value } = e.currentTarget;

    setMeme((prev) => ({
      ...prev,
      topText: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <label htmlFor="topText">
          Top Text
          <input
            type="text"
            id="topText"
            name="topText"
            placeholder="One does not simply"
            value={meme.topText}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="bottomText">
          Bottom Text
          <input
            type="text"
            id="bottomText"
            name="bottomText"
            placeholder="Walk into Mordor"
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
