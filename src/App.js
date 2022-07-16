import React from "react";
import Header from "./Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Where from "./pages/Where";
import "./styles/App.css";
import "./styles/Media.css";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/where" element={<Where />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
