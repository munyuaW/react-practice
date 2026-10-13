import { useEffect, useState } from "react";

export default function Main() {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "To be or not to be",
    bottomText: "That is the question",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMeme() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const randomMemeUrl = allMemes[randomIndex].url;

    setMeme((prev) => ({
      ...prev,
      imageUrl: randomMemeUrl,
    }));
  }

  function handleChange(e) {
    const { value, name } = e.currentTarget;

    setMeme((prev) => ({
      ...prev,
      [name]: value,
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
            value={meme.bottomText}
            onChange={handleChange}
          />
        </label>
        <button onClick={getMeme}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
