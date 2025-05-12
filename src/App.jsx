// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"; // create this page

import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}
