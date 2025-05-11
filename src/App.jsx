// App.jsx
import React from "react";
import Header from "./components/Header"; // adjust path if needed
import Home from "./pages/Home";         // adjust path if needed
import "./App.css"; // global styles (optional)

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        {/* Add other sections here like <About />, <Projects /> */}
      </main>
    </>
  );
}
