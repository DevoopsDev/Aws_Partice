import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/index.js";
import { Landing, About, Portfolio, Contact, NotFound } from "./routes/index.js";
import "./core-ui/Styles.sass";
import './core-ui/Hover.sass';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="#" element={<About />} />
        <Route path="#" element={<Portfolio />} />
        <Route path="#" element={<Contact />} />
        <Route path="#" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;