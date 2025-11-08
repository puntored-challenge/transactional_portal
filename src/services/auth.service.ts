import { AuthResponse, Login, SignIn } from '../interfaces/auth.interface';
import api from './axios';

export const loginService: (data: Login) => Promise<AuthResponse> = async (data: Login) => {
  const response = await api.post('/auth/login', data);
  return response.data.data;
};

export const signinService :(data: SignIn) => Promise<AuthResponse>= async (data: SignIn) => {
  const response = await api.post('/auth/signin', data);
  return response.data.data;
};

export const logout: () => void = async () => {
  localStorage.removeItem('token');
};
