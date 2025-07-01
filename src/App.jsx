import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Category from "./pages/Category.jsx";
import CartPage from "./pages/CartPage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import Community from "./pages/Community.jsx";
import Calendar from "./pages/Calendar.jsx";
import Profile from "./pages/Profile.jsx";

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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/community" element={<Community />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/profile" element={<Profile />} />
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
