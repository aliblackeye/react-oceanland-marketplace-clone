import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SwapScreen from "./screens/SwapScreen/SwapScreen.jsx";
import HomeScreen from "./screens/HomeScreen/HomeScreen.jsx";
import MarketplaceScreen from "./screens/MarketplaceScreen/MarketplaceScreen.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./app.scss";

import "./responsive.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/swap" element={<SwapScreen />} />
        <Route path="/marketplace" element={<MarketplaceScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
