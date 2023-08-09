import { CartProvider } from "react-use-cart";
import { useContext, useState } from "react";
import CartPortal from "./Components/Cart/CartPortal";
import About from "./Components/Layout/About/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import STORE from "./Components/Layout/Store/Store";
import Home from "./Components/Layout/Home/Home";
import NavBar from "./Components/Header/Navbar";
import Contact from "./Components/Layout/Contact/Contact";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import NotFound from "./UI/NotFound";
import AuthForm from "./Components/Auth/AuthForm";
import AuthContext from "./ContextStore/auth-context";

function App() {
  const [cart, Setcart] = useState(false);
  const authCxt = useContext(AuthContext);

  const showCartHandler = () => {
    Setcart(true);
  };
  const hideCartHandler = () => {
    Setcart(false);
  };
  const addContactHandler = async (contactData) => {
    const response = await fetch(
      "https://e-commerce-app-fardeen-default-rtdb.asia-southeast1.firebasedatabase.app/",
      {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();
    console.log(data);
  };
  return (
    <CartProvider>
      <Router>
        {cart && authCxt.isLoggedIn && <CartPortal onHide={hideCartHandler} />}

        <NavBar onShow={showCartHandler} />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AuthForm" element={<AuthForm />} />
            <Route
              exact
              path="/ProductDetails/:productId"
              element={
                authCxt.isLoggedIn ? (
                  <ProductDetails />
                ) : (
                  <Navigate to="/AuthForm" />
                )
              }
            />

            <Route
              exact
              path="/Store"
              element={
                authCxt.isLoggedIn ? (
                  <STORE onShow={showCartHandler} />
                ) : (
                  <Navigate to="/AuthForm" />
                )
              }
            />
            <Route exact path="/About" element={<About />} />
            <Route
              exact
              path="/Contact"
              element={<Contact onAddContact={addContactHandler} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
