import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Routes Demo</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;