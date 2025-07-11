import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      localStorage.setItem('token', res.access_token);

      const payload = JSON.parse(atob(res.access_token.split('.')[1]));
      if (payload.role === 'admin') navigate('/admin/dashboard');
      else if (payload.role === 'store_owner') navigate('/owner/dashboard');
      else navigate('/user/stores');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
