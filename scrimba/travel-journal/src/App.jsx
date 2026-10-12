import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

export default function App() {
  return (
    <div>
      <Header />
      <div className="entries">
        {data.map((item) => (
          <Entry key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
