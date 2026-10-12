function App() {
  return (
    <>
      <Greating name="Munyua" />
      <Welcome />
    </>
  );
}

function Greating({ name }) {
  return <h1>Hello, {name}</h1>;
}

function Welcome() {
  return <h3>Welcome to learning react!</h3>;
}

export default App;
