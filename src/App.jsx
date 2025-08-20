import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AppProvider } from "./context/UserAuth";
import UserData from "./components/User";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/user" element={<UserData />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;