import React, { useState } from "react";

const Login = () => {
  // State to manage the form input values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  // Function to handle form submission
  
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit="">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
