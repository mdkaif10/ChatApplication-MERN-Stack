import React from "react";
import { Routes, Route } from "react-router-dom";
import Messages from "./pages/Messages";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

export default function App() {
  return (
    <Routes>
      <Route index={true} element={< Messages />} />
      <Route path="/auth/login" element= {<Login />} />
      <Route path="/auth/signup" element= {<Signup />} />
    </Routes>
  );
}
