// App.jsx
import React from "react";
import Header from "./components/Header"; // adjust path if needed
import Home from "./pages/Home";         // adjust path if needed
import "./App.css"; // global styles (optional)
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}
