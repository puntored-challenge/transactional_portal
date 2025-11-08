/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { buyRechargeService, getSuppliersService, getTransactionsService } from '../services/transaction.service'
import { Recharge, RechargeResponse, RechargeWithUsername, Supplier } from '../interfaces'

export interface UseTransactionReturn {
  loading: boolean;
  error: string;
  getSuppliers: () => Promise<Supplier[]>;
  buyRecharge: (rechargeData: Recharge) => Promise<RechargeResponse>;
  getTransactions: () => Promise<RechargeWithUsername[]>;
}


/**
 * useTransaction
 *
 * Hook personalizado que maneja operaciones relacionadas con transacciones.
 * Proporciona estado de carga, errores y funciones para interactuar con proveedores,
 * realizar recargas y obtener historial de transacciones.
 */
export function useTransaction() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  const getSuppliers: () => Promise<Supplier[]> = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await getSuppliersService()
      return data.data;
    } catch (err: any) {
      console.error(err);
      const msg = err?.response?.data.message || 'Error desconocido';
      setError(t(msg));
      throw err;
    } finally {
      setLoading(false);
    }
  }

  const buyRecharge: (rechargeData: Recharge) => Promise<RechargeResponse> = async (rechargeData: Recharge) => {
    setError("");
    setLoading(true);
    try {
      const data = await buyRechargeService(rechargeData);
      return data as RechargeResponse;
    } catch (err: any) {
      console.error(err);
      const msg = err?.response?.data.message || 'Error desconocido';
      setError(t(msg));
      throw err;
    } finally {
      setLoading(false);
    }
  }


  const getTransactions: () => Promise<RechargeWithUsername[]> = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await getTransactionsService();
      console.log(data);
      return data as RechargeWithUsername[];
    } catch (err: any) {
      console.error(err);
      const msg = err?.response?.data.message || 'Error desconocido';
      setError(t(msg));
      throw err
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    getSuppliers,
    buyRecharge,
    getTransactions
  }
}
