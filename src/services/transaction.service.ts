import { Recharge } from '../interfaces';
import api from './axios';

export const getSuppliersService = async () => {
  const response = await api.get('/transaction/suppliers');
  return response.data;
};

export const buyRechargeService = async (data: Recharge ) => {
  const response = await api.post('/transaction/buy', data);
  return response.data.data; 
};


export const getTransactionsService = async () => {
  const response = await api.get('/transaction');
  return response.data.data;
}