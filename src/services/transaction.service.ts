import api from './axios';

export const getSuppliersService = async () => {
  const response = await api.get('/transaction/suppliers');
  return response.data;
};
