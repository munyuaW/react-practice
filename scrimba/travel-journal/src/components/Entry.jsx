import markerIcon from "../assets/marker.png";

export default function Entry(props) {
  return (
    <div className="entry-card">
      <div className="image">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div>
        <p className="location">
          <span className="marker">
            <img className="marker" src={markerIcon} alt="map marker" />
          </span>
          <span className="country">{props.country}</span>
          <a href={props.googleMapsLink}>View on google maps</a>
        </p>
        <h1>{props.title}</h1>
        <p className="date">{props.date}</p>
        <p className="description">{props.text}</p>
      </div>
    </div>
  );
}
