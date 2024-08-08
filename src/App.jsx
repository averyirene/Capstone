import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/";
import Profile from "./pages/Profile/";
import Homepage from "./pages/Homepage";
import Breathe from "./pages/Breathe";
import About from "./pages/About";
import Header from "./components/Header";

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/breathe" element={<Breathe />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
