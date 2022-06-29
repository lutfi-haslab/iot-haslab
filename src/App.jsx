import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import DataRecord from './PagesPlatform/DataRecord';
import DataDetail from './PagesPlatform/DataDetail';

import Lms from "./pages/Lms";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Home from "./pages/Home";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/lms" element={<Lms />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/detail/:id" element={<BlogDetail />} />
          <Route exact path="/iot/record" element={<DataRecord />} />
          <Route exact path="/iot/detail" element={<DataDetail />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
