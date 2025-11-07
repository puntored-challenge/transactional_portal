import { Box, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import { registerFieldTransaction } from '../../misc'
import { Supplier, Transaction } from '../../interfaces';
import { useForm } from 'react-hook-form';
import { useTransaction } from '../../hooks/useTransaction';
import { useEffect, useState, useCallback } from 'react';

const TransactionComponet = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Transaction>();
  const { error, loading, getSuppliers } = useTransaction();
  const [suppliers, setSupplier] = useState<Supplier[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState("");

  useEffect(() => {
    const fetchSuppliers = async () => {
      const data = await getSuppliers();
      console.log('Suppliers data:', data);
      setSupplier(data);
      console.log('Suppliers state:', loading, error, suppliers);
    };
    fetchSuppliers();
  }, [setSupplier])

  const onSubmit = async (data: Transaction) => {
    try {
      console.log('Transaction data:', data);
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  const handleSupplierChange = useCallback((event: SelectChangeEvent<string>) => {
    setSelectedSupplier(event.target.value);
  }, [suppliers]);

  return (
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
          <Grid container spacing={2} justifyContent={'center'} marginBottom={4} >

            <TextField
              placeholder="Ingrese numero celular"
              variant="outlined"
              sx={{
                width: {
                  xs: '90%',
                  md: '80%'
                }
              }}
              label="Celular"
              {...registerFieldTransaction({
                name: 'cellPhone',
                rules: {
                  required: 'Telefono celular obligatorio',
                  length: { value: 10, message: 'Debe contener 10 caracteres' }
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
                  width: { xs: '90%', md: '80%' }, // ancho responsive
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
              label="Monto"
              {...registerFieldTransaction({
                name: 'value',
                rules: {
                  required: 'Monto obligatorio',
                },
                register,
                errors
              })}
            />

            {/* {error && (
              <Typography color="error" variant="body2" align="center" sx={{ width: '100%' }}>
                {error}
              </Typography>
            )} */}
          </Grid>
          <Grid container justifyContent={'center'}>
            <Button
              // loading={loading}
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
  )
}

export default TransactionComponet
