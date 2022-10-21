import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import {Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Messages from "./Messages";
import Signin from "./Signin";
function App() {
  return (
      
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/messages" element={
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  );
}

export default App;
