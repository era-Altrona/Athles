import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/services";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newletter/Newsletter";
import Price from "./components/price/Price";
import Employees from "./components/Employees/Employees";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import "./css/background.css";

export default function App() {
  return (
    <Router>
      <div className="svgBackground">
        <main>
          
          <Routes>
            <Route path="/" element={
              <>  
                <Hero />
                <AboutUs />
                <Employees />
                <Services />
                <Newsletter />
              </>
            } />

            <Route path="/price" element={<Price />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}