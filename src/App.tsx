import "./style.scss";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import {Navigate, Route, BrowserRouter as Router, Routes,} from "react-router-dom";
import React, {useEffect, useState} from "react";

import About from "./components/About/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Preloader from "./components/Pre";
import Projects from "./components/Projects/Projects";
import Résumé from "./components/Résumé/Résumé";
import ScrollToTop from "./components/ScrollToTop";
import Particle from "./components/Particle";

function ScrollToTopButton () {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            { showButton && (
                <button
                    type="button"
                    title="Scroll to top"
                    tabIndex={0}
                    onClick={handleClick}
                    className="scroll-to-top-button"
                >
                    Scroll To Top
                </button>
            ) }
        </>
    );
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
          <Router>
              <Preloader load={load} />
              <div className="App" id={load ? "no-scroll" : "scroll"}>
                  <ScrollToTopButton />
                  <Particle />
                  <Navbar />
                  <ScrollToTop />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/project" element={<Projects />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/resume" element={<Résumé />} />
                      <Route path="/contactme" element={<ContactMe />} />
                      <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                  <Footer />
              </div>
          </Router>
  );
}

export default App;
