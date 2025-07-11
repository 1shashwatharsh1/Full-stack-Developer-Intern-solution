import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Backend URL
});

// Login
export const login = async (email: string, password: string) => {
  const res = await api.post('/auth/login', { email, password });
  return res.data;
};

// Signup
export const signup = async (data: any) => {
  const res = await api.post('/auth/signup', data);
  return res.data;
};

// Get all stores
export const getStores = async (token: string) => {
  const res = await api.get('/stores', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
