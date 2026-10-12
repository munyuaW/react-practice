import jokesData from "./jokesData";
import Joke from "./Joke";

function App() {
  const jokeElms = jokesData.map((joke) => (
    <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
  ));

  return <div>{jokeElms}</div>;
}

export default App;
