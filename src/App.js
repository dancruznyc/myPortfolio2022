import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import NavigationMenu from "./Components/Navigation/NavigationMenu";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionHeader from "./Components/SectionHeader/SectionHeader";
import ScrollToTop from "./Components/ScrollToTop/ScrolleToTop";
import { useState } from "react";

function App() {
  const [showNavigation, setShowNavigation] = useState(false);
  function navControl() {
    if (!showNavigation) {
      setShowNavigation(true);
    } else setShowNavigation(false);
  }
  return (
    <div>
      <Router>
        <Header></Header>
        <Navigation
          showNavigation={showNavigation}
          setShowNavigation={setShowNavigation}
          navControl={navControl}
        />
        <NavigationMenu
          showNavigation={showNavigation}
          setShowNavigation={setShowNavigation}
          navControl={navControl}
        />
        <ScrollToTop />
        <SectionHeader></SectionHeader>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
