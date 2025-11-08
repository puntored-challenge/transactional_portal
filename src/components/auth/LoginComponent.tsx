import { Button, Card, CardContent, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks';
import { Login } from '../../interfaces';
import { registerField } from '../../misc';


/**
 * LoginComponent - Componente para el inicio de sesión de usuarios.
 * @returns LoginComponent
 */
export const LoginComponent = () => {

    const { login, loading, error } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<Login>();
    const navigate = useNavigate();

    const onSubmit = async (data: Login) => {
        try {
            await login(data);
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
                    Iniciar Sesión
                </Typography>
                <Typography gutterBottom variant="body1" fontWeight={500} component="div" align='center'>
                    Ingresa tus <Typography display="inline" color="primary">credenciales</Typography> para disfrutar de todos los servicios de nuestro portal   </Typography>
                <Grid
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    marginTop={4} marginBottom={4} justifyContent={'center'}>
                    <Grid container spacing={2} justifyContent={'center'} marginBottom={4} >
                        <TextField
                            id="outlined-required"
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
                            id="filled-required"
                            label="Contraseña"
                            placeholder="Ingrese su contraseña"
                            variant="outlined"
                            type="password"
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
                        Ingresar
                    </Button>
                    
                    </Grid>

                </Grid>
                <Typography gutterBottom variant="body1" fontWeight={500} component="div" align='center'>
                    No tienes una cuenta <Link component={RouterLink} to="/auth/signin" display={"inline"} color='primary'>registrate aqui</Link>.
                </Typography>
            </CardContent>
        </Card>
    )
}
