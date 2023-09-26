import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

function RegisterPage() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleRegister = () => {
    // Implement registration logic (e.g., create user, set user data)
    const userData = { username: formData.username };
    login(userData);
  };

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;
