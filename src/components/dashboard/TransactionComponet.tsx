import { Box, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import { registerFieldTransaction } from '../../misc'
import { Recharge, RechargeResponse, Supplier } from '../../interfaces';
import { useForm } from 'react-hook-form';
import { useTransaction } from '../../hooks/useTransaction';
import { useEffect, useState, useCallback } from 'react';
import { TransactionResultDialog } from './TransactionResultDialog';

/**
 * TransactionComponent
 *
 * Componente de React que gestiona y muestra información relacionada con transacciones.
 * Puede incluir funcionalidades como creación, edición, eliminación y visualización de transacciones.
 *
 */
const TransactionComponet = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Recharge>();
  const { error, loading, getSuppliers, buyRecharge } = useTransaction();
  const [suppliers, setSupplier] = useState<Supplier[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [transactionResult, setTransactionResult] = useState<RechargeResponse | undefined>();

  useEffect(() => {
    const fetchSuppliers = async () => {
      const data = await getSuppliers();
      setSupplier(data);
    };
    fetchSuppliers();
  }, []);

  const handleCloseDialog = () => { setOpenDialog(false); };

  const onSubmit = async (data: Recharge) => {
    try {
      const response = await buyRecharge(data);
      setOpenDialog(true);
      setTransactionResult(response);
      console.log('Recharge successful:', response);
    } catch (err) {
      console.error('Recharge error:', err);
    }
  };

  const handleSupplierChange = useCallback((event: SelectChangeEvent<string>) => {
    setSelectedSupplier(event.target.value);
  }, []);

  return (
    <>
      <Card
        sx={{
          backgroundColor: 'background.default',
          opacity: 0.9,
          width: {
            xs: '100%',
            sm: '50%'
          }
        }}
        elevation={4}
      >
        <CardContent>
          <Typography gutterBottom variant="h4" fontWeight={500} component="div" align='center'>
            Recargar
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            fontWeight={500}
            component="div"
            align="center"
          >
            Ingresa los datos y <Typography display="inline" color="primary">disfuta tu recarga</Typography>.
          </Typography>

          <Grid container
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            marginTop={4} marginBottom={4} justifyContent={'center'}>
            <Grid container spacing={2} justifyContent={'center'} marginBottom={4} width={'100%'} >

              <TextField
                label="Telefono Celular"
                placeholder="Ingrese numero celular"
                variant="outlined"
                inputMode="numeric"
                sx={{
                  width: {
                    xs: '90%',
                    md: '80%'
                  },
                }}
                onInput={(e) => {
                  let value = (e.target as HTMLInputElement).value.replace(/\D/g, '');

                  if (value && value[0] !== '3') {
                    value = '3' + value;
                  }

                  (e.target as HTMLInputElement).value = value;
                }}
                type="text"
                slotProps={{
                  input: {
                    inputProps: {
                      maxLength: 10
                    }
                  },
                }}
                {...registerFieldTransaction({
                  name: 'cellPhone',
                  rules: {
                    required: 'Telefono celular obligatorio',
                    minLength: { value: 10, message: 'Debe contener 10 caracteres' },
                    maxLength: { value: 10, message: 'Debe contener 10 caracteres' },
                  },
                  register,
                  errors
                })}
              />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <FormControl
                  sx={{
                    width: { xs: '90%', md: '80%' },
                  }}
                >
                  <InputLabel id="supplier-select-label">Proveedor</InputLabel>
                  <Select
                    labelId="supplier-select-label"
                    id="supplier-select"
                    value={selectedSupplier}
                    label="Proveedor"
                    {...registerFieldTransaction({
                      name: 'supplierId',
                      rules: { required: 'Proveedor es requerido' },
                      register,
                      errors,
                    })}
                    onChange={handleSupplierChange}
                  >
                    {suppliers.map((supplier) => (
                      <MenuItem key={supplier.id} value={supplier.id}>
                        {supplier.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.supplierId && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ mt: 1, ml: 2 }}
                    >
                      {errors.supplierId.message}
                    </Typography>
                  )}
                </FormControl>
              </Box>
              <TextField
                placeholder="Ingrese el monto"
                variant="outlined"
                sx={{
                  width: {
                    xs: '90%',
                    md: '80%'
                  }
                }}
                slotProps={{
                  input: {
                    inputProps: {
                      maxLength: 6
                    }
                  },
                }}
                inputMode="numeric"
                onInput={(e) => {
                  const maxValue = 100000;
                  const value = (e.target as HTMLInputElement).value.replace(/\D/g, '');
                  (e.target as HTMLInputElement).value = Number(value) > maxValue ? String(maxValue) : value;
                }}
                label="Monto"
                {...registerFieldTransaction({
                  name: 'value',
                  rules: {
                    required: 'Monto obligatorio',
                    min: { value: 1000, message: 'Mínimo $1.000' },
                    max: { value: 100000, message: 'Máximo $100.000' }
                  },
                  register,
                  errors
                })}
              />

              {error && (
                <Typography color="error" variant="body2" align="center" sx={{ width: '100%' }}>
                  {error}
                </Typography>
              )}
            </Grid>
            <Grid container justifyContent={'center'}>
              <Button
                loading={loading}
                loadingPosition='start'
                variant='contained'
                type='submit'
              >
                Recargar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <TransactionResultDialog
        open={openDialog}
        transactionResult={transactionResult}
        onClose={handleCloseDialog}
      />
    </>
  )
}

export default TransactionComponet
