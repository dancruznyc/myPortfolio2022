import React from "react";
import "./SectionHeader.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function SectionHeader() {
  return (
    <div className="section-header">
      <Routes>
        <Route
          path="/"
          element={<h1 className="rubberband">Welcome to my Studio</h1>}
        />
        <Route
          path="/about"
          element={<h1 className="rubberband">About Me</h1>}
        />
        <Route
          path="/portfolio"
          element={<h1 className="rubberband">My Portfolio</h1>}
        />
      </Routes>
    </div>
  );
}
