import { Button, Card, CardContent, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { SignIn } from '../../interfaces';
import { registerField } from '../../misc';

export const SignInComponent = () => {

  const { signin, loading, error } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<SignIn>();
  const navigate = useNavigate();

  const onSubmit = async (data: SignIn) => {
    try {
      await signin(data);
      navigate('/dashboard');
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
          Registrate
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          fontWeight={500}
          component="div"
          align="center"
        >
          Ingresa tus datos y <Typography display="inline" color="primary">únete al equipo</Typography>.
        </Typography>

        <Grid container
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          marginTop={4} marginBottom={4} justifyContent={'center'}>
          <Grid container spacing={2} justifyContent={'center'} marginBottom={4} >

            <TextField
              placeholder="Ingrese su usuario"
              variant="outlined"
              sx={{
                width: {
                  xs: '90%',
                  md: '80%'
                }
              }}
              label="Usuario"
              {...registerField({
                name: 'username',
                rules: {
                  required: 'Usuario obligatorio',
                  minLength: { value: 8, message: 'Mínimo 8 caracteres' }
                },
                register,
                errors
              })}
            />
            <TextField
              placeholder="Ingrese su nombre"
              variant="outlined"
              sx={{
                width: {
                  xs: '90%',
                  md: '80%'
                }
              }}
              label="Nombre"
              {...registerField({
                name: 'name',
                rules: {
                  required: 'Nombre obligatorio',
                },
                register,
                errors
              })}
            />
            <TextField
              placeholder="Ingrese su apellido"
              variant="outlined"
              sx={{
                width: {
                  xs: '90%',
                  md: '80%'
                }
              }}
              label="Apellido"
              {...registerField({
                name: 'lastname',
                rules: {
                  required: 'Apellido obligatorio',
                },
                register,
                errors
              })}
            />
            <TextField
              label="Contraseña"
              placeholder="Ingrese su contraseña"
              variant="outlined"
              {...registerField({
                name: 'password',
                rules: {
                  required: 'Contraseña obligatoria',
                  minLength: { value: 8, message: 'Mínimo 8 caracteres' }
                },
                register,
                errors
              })}
              sx={{
                width: {
                  xs: '90%',
                  md: '80%'
                }
              }}
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
              Registrarse
            </Button>
          </Grid>
        </Grid>
        <Typography
          gutterBottom
          variant="body1"
          fontWeight={500}
          component="div"
          align="center"
        >
          ¿Ya eres parte del equipo?{' '}
          <Link to="/auth" component={RouterLink} display="inline" color="primary">
            Ingresa aquí
          </Link>.
        </Typography>

      </CardContent>
    </Card>
  )
}


