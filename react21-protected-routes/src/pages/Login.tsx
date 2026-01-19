import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLoggedIn: (val: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== "") {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert("Enter username!");
    }
  };

  return (
    <div>
      <h2>🔑 Login Page</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;