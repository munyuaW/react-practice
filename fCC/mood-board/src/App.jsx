export default function MoodBoard() {
  const items = [
    {
      color: "#00BBFF",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Caribbean",
    },
    {
      color: "#EE6363",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Gawadar Beach",
    },
    {
      color: "#FF004C",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Cape Town",
    },
    {
      color: "#0400ff",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Suez Canal",
    },
    {
      color: "#5900ff",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Santorini",
    },
    {
      color: "#00ff48",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Istanbul",
    },
  ];
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {items.map((item) => (
          <MoodBoardItem key={item.color} {...item} />
        ))}
      </div>
    </div>
  );
}

function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img src={`${image}`} alt="" className="mood-board-image" />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}
