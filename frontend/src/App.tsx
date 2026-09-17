import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Nav.js";
import Home from './components/Home.js';

import Classes from "../src/components/classes/Classes.js";
import Character from "./components/character/Character.js";

import AdminLogin from "./components/admin/AdminLogin.js";
import ProtectedRoute from "./components/admin/ProtectedRoute.js";
import AdminDashboard from "./components/admin/AdminDashboard.js";
import AdminPasswordChange from "./components/admin/AdminPasswordChange.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<Character />} />
        <Route path="/admin/login" element={<AdminLogin />}/>
        <Route path="/admin/change-password" element={<AdminPasswordChange />}/>

        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Redirect user if they try to navigate to a non-existent path */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
