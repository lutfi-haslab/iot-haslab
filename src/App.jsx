import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import DataRecord from "./PagesPlatform/DataRecord";
import DataDetail from "./PagesPlatform/DataDetail";

import Lms from "./pages/Lms";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Home from "./pages/Home";
import Login from "./Auth/Login";
import RequireAuth from "./Auth/RequireAuth";

// PTKP PAGES
import {Dashboard as DashPTKP} from "./pages/PTKP/Dashboard";
import {Data as DataPTKP} from "./pages/PTKP/Data";
import {Event as EventPTKP} from "./pages/PTKP/Event";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route element={<RequireAuth protectedName="ptkp" />}>
            <Route exact path="/dashboard/ptkp" element={<DashPTKP />} />
            <Route exact path="/dashboard/ptkp/data" element={<DataPTKP />} />
            <Route exact path="/dashboard/ptkp/event" element={<EventPTKP />} />

            <Route exact path="/lms" element={<Lms />} />
          </Route>
          <Route element={<RequireAuth protectedName="peruri" />}>
          <Route exact path="/" element={<Home />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blog/detail/:id" element={<BlogDetail />} />
            <Route exact path="/iot/record" element={<DataRecord />} />
            <Route exact path="/iot/detail" element={<DataDetail />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
