import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css'
import Classes from "./components/Classes.js";
import Home from './components/Home.js';
import Character from "./components/Character.js";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex items-center justify-center h-12 mb-8 uppercase bg-white/10">
          <Link to="/" className="p-3 m-4">Home</Link>
          <Link to="/Classes" className="p-3 m-4">Classes</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<Character />} />
        
        <Route path="*" element={<Navigate to="/classes" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
