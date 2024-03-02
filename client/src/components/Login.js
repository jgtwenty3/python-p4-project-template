import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(data => {
        // Check the user type
        const userType = data.usertype;
        console.log(data)

        // Redirect based on the user type
        if (userType === 'user') {
          history.push("/animal-feed");
        } else if (userType === 'admin') {
          history.push("/animals"); // Change this to the AnimalContainer route
        } else {
          // Handle other user types or show an error
          console.error('Invalid user type');
        }
      })
      .catch(error => console.log('error'));
  };

  return (
    <div className="login-wrapper"> {/* Added wrapper class */}
      <h1>Login</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button className="" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;