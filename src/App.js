import logo from "./logo.svg";
import "./App.css";
import myGif from "./ok.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The Work Begins.</p>
        <img src={myGif} alt="my-gif" />
      </header>
    </div>
  );
}

export default App;
