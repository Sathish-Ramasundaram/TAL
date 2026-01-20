import Provider from "./Provider";

function App() {
  return (
    <Provider
      render={(value) => (
        <h2>Finished with value: {value}</h2>
      )}
    />
  );
}

export default App;
