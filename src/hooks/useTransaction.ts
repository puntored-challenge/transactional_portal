/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getSuppliersService } from '../services/transaction.service'

export function useTransaction() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  const getSuppliers = async () => {
    setError("")
    setLoading(true)
    try {
      const data = await getSuppliersService()
      return data.data
    } catch (err: any) {
      console.error(err);
      const msg = err?.response?.data.message || 'Error desconocido'
      setError(t(msg))
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    getSuppliers,
  }
}
