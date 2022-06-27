import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="food" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Sami Mogaji, open sourced on{" "}
            <a
              href="https://github.com/Samitola/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on
            <a
              href="https://app.netlify.com/sites/musical-smakager-975188/deploys"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
