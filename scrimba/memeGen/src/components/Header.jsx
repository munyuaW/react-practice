import trollface from "../assets/troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={trollface} alt="" />
      <h1>Meme Generator</h1>
    </header>
  );
}
