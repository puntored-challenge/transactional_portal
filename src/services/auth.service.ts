import { Login, SignIn } from '../interfaces/auth.interface';
import api from './axios';

export const loginService = async (data: Login) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const signinService = async (data: SignIn) => {
  const response = await api.post('/auth/signin', data);
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem('token');
};
