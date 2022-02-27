import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Browser</h1>
        <Weather defaultCity="Tokyo" />
        <footer>
          <a
            href="https://github.com/miyu-codes/weather-react-app"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Miyu Hayakawa
        </footer>
      </div>
    </div>
  );
}

export default App;
