import { Button, Card, CardContent, FormControl, Grid, InputLabel, Select, TextField, Typography } from '@mui/material'
import { registerFieldTransaction } from '../../misc'
import { Transaction } from '../../interfaces';
import { useForm } from 'react-hook-form';
import { useTransaction } from '../../hooks/useTransaction';
import { useEffect, useState } from 'react';

const TransactionComponet = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Transaction>();
  const {error,loading,getSuppliers} = useTransaction();
  const [suppliers, setSupplier] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      const data = await getSuppliers();
      console.log('Suppliers data:', data);
      setSupplier(data);
      console.log('Suppliers state:', loading, error, suppliers);
    };
    fetchSuppliers();
  },[])

  const onSubmit = async (data: Transaction) => {
    try {
      console.log('Transaction data:', data);
    } catch (err) {
      console.error('Login error:', err);
    }
  };
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
            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl> */}
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
