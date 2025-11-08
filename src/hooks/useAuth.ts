/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Login, SignIn } from '../interfaces'
import { loginService, signinService } from '../services/auth.service'
import { useDispatch } from 'react-redux';
import { setToken, logout as logoutState } from '../store/slice/authSlice';

export interface UseAuthReturn {
  loading: boolean;
  error: string;
  login: (credentials: Login) => Promise<any>;
  signin: (signin: SignIn) => Promise<any>;
  logout: () => void;
}


/**
 * useAuth
 *
 * Hook personalizado que maneja la autenticación de usuarios.
 * Proporciona estado de carga, errores y funciones para login, signup y logout.
 *
 */
export function useAuth() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const login = async (credentials: Login) => {
    setError("")
    setLoading(true)
    try {
      const data = await loginService(credentials)
      const token = data.token;
      localStorage.setItem('token', token);
      dispatch(setToken(token));
    } catch (err: any) {
      console.error(err);
      const msg = err?.response?.data.message || 'Error desconocido';
      setError(t(msg));
      throw err;
    } finally {
      setLoading(false);
    }
  }

  const signin = async (signin: SignIn) => {
    setError('');
    setLoading(true);
    try {
      const data = await signinService(signin);
      const token = data.token;
      localStorage.setItem('token', token);
      dispatch(setToken(token));
    } catch (err: any) {
      console.error(err);

      let msg = err?.response?.data.message || 'Error desconocido';
      const match = msg.match(/User with username '(.+)' already exists/);
      if (match) {
        const username = match[1];
        msg = t("User with username {{username}} already exists", { username });
      } else {
        msg = t(msg);
      }

      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutState());
  }

  return {
    loading,
    error,
    login,
    signin,
    logout,
  }
}
