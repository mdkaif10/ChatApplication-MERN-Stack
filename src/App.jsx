import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Messages from "./pages/Messages";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Verification from "./pages/auth/Verification";

export default function App() {
  
  // Check if the user has set the color theme to dark or not and apply the class to the body

  useEffect(() => {
    const colorMode = JSON.parse(localStorage.getItem("color-theme"));

    const className = "dark";

    const bodyClass = window.document.body.classList;
    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, []);

  return (
    <Routes>
      <Route index={true} element={<Messages />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/verify" element={<Verification />} />
    </Routes>
  );
}
