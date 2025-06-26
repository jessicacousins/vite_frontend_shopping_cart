import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Category from "./pages/Category.jsx";
import CartPage from "./pages/CartPage.jsx";

export default function App() {
  return (
    <ParallaxProvider>
      <Router>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="*"
              element={
                <div style={{ padding: "2rem", textAlign: "center" }}>
                  Page not found
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </ParallaxProvider>
  );
}
