import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Nav.js";
import Classes from "../src/components/classes/Classes.js";
import Home from './components/Home.js';
import Character from "./components/character/Character.js";
import AdminLogin from "./components/admin/AdminLogin.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<Character />} />
        <Route path="/admin/login" element={<AdminLogin />}/>
        
        {/* Redirect user if they try to navigate to a non-existent path */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
