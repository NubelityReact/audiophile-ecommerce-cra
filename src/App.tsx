import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "./redux/store";
import { useEffect } from "react";
import { fetchAllProducts } from "./redux/features/products";
import { login } from "./redux/features/auth";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;

function Layout() {
  const dispatch: AppDispatch = useDispatch();
  const productsState = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(login({ username: "fulanito", passsword: "pass" }));
  }, [dispatch]);

  if (productsState.loading) {
    return (
      <div>
        <h1>Loading products</h1>
      </div>
    );
  }

  if (productsState.error) {
    return (
      <div>
        <h1>{productsState.error}</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
