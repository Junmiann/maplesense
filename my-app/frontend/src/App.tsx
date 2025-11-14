import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LoginForm from './components/login/LoginForm.js';
import Home from './components/Home.js';
import ProtectedRoute from "./components/ProtectedRoute.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
