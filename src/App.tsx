import "./App.scss";
import NewNote from "./components/NewNote/NewNote";
import Notes from "./components/Notes/Notes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Note Taker</h1>
      </header>
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
