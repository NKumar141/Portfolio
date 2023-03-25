import logo from "./logo.svg";
import "./App.css";
import myGif from "./ok.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../src/components/NavBar";
import { Banner } from "./components/Banner.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
