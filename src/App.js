import logo from "./logo.svg";
import "./App.css";
import myGif from "./ok.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../src/components/NavBar";
import { Banner } from "./components/Banner.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
