import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Implement login logic (e.g., check credentials, make API request)
    const userData = { username: formData.username };
    login(userData);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginPage;
