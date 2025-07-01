// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Headers/Header";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import "./styles/pages.css";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Popup from "./components/Popup/Popup";
import { useState } from "react";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      <Router>
        <div className="main-layout">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <div>
          <ChatbotComponent />
        </div>
      </Router>

      {showPopup ? <Popup onClose={() => setShowPopup(false)} /> : null}
    </>
  );
}
export default App;
