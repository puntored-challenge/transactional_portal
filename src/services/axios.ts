import axios from 'axios';
import { store } from '../store';
import { setOpen } from '../store/slice/messageDialogSlice';
import { logout } from '../store/slice/authSlice';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.dispatch(logout());
          store.dispatch(setOpen({
            title: 'Error',
            message: error.response?.data?.message || 'Ha ocurrido un error',
            confirmationText: 'Cerrar',
            redirectTo: '/auth',
          }));
          console.error('No autorizado, redirigir al error', error.response);
          break;
        case 403:
          {
            const token = localStorage.getItem('token');
            let redirectTo: string | undefined = undefined;
            console.error('Prohibido, mostrar mensaje de acceso denegado', error.response);

            if(!token) {
              store.dispatch(logout());
              redirectTo = '/auth';
            }

            store.dispatch(setOpen({
              title: 'Error',
              message: error.response?.data?.message || 'Accesso denegado',
              confirmationText: 'Cerrar',
              redirectTo,
            }));
            break;
          }
        default:
          store.dispatch(setOpen({
            title: 'Error',
            message: error.response?.data?.message || 'Ha ocurrido un error',
            confirmationText: 'Cerrar',
          }));
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default api;
