import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import { CartProvider } from "./context/cart";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
      <footer>this is the footer</footer>
    </>
  );
}

export default App;
