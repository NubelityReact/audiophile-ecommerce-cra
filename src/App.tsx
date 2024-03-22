import "./App.css";
import Button from "./components/Button";
import Typography from "./components/Typography";

function App() {
  return (
    <div className="App">
      <header>
        <Typography variant="h1" as="h1">
          Main title
        </Typography>
      </header>

      <Button variant="link">
        <Typography variant="subtitle">Next</Typography>
      </Button>
    </div>
  );
}

export default App;
