import React from "react";
import '../login'
import Login from "./assets/login/login";
const Login=()=> {
  
  return (
    <div>
      <h2>Login</h2>

      <input 
        type="text" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} 
      />

      <input 
        type="password" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
