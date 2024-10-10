import React from "react";
import { Routes, Route } from "react-router-dom";
import Messages from "./pages/Messages";

export default function App() {
  return (
    <Routes>
      <Route index={true} element={< Messages />} />
    </Routes>
  );
}
