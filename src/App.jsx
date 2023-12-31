import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
 
  
function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/signup"  element={<Register/>} />
          <Route path="/dashboard"  element={<Dashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
  
export default App;