import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>this is the footer</footer>
    </>
  );
}

export default App;
