import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

  const [darkMode, setDarkMode] =
    useState(true);

  return (

    <div
      className={
        darkMode
          ? "app dark"
          : "app light"
      }
    >

      <BrowserRouter>

        <button
          className="theme-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >

          {darkMode
            ? "☀️ Light Mode"
            : "🌙 Dark Mode"}

        </button>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;