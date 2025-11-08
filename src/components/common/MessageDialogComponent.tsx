

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Typography } from '@mui/material';
import { MessageDialog } from '../../interfaces';
import { Link } from 'react-router-dom';

interface MessageDialogProps {
  open: boolean;
  messageInformation?: MessageDialog;
  onClose: () => void;
}


/**
 * MessageDialogComponent
 *
 * Componente de React que muestra un diálogo/modal con información de un mensaje.
 *
 * @param {object} props - Propiedades del componente.
 * @param {boolean} props.open - Indica si el diálogo está abierto o cerrado.
 * @param {MessageDialog} [props.messageInformation] - Información opcional del mensaje a mostrar.
 * @param {() => void} props.onClose - Función que se ejecuta al cerrar el diálogo.
 *
 */
export const MessageDialogComponent: React.FC<MessageDialogProps> = ({
  open,
  messageInformation,
  onClose
}) => {
  console.log('MessageDialogComponent rendered with messageInformation:', messageInformation);
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        variant="h5"
        align="center"
        color="primary"
      >
        {messageInformation?.title}
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="body1" >{messageInformation?.message}</Typography>
        </Box>
      </DialogContent>

      <DialogActions>
        {
          messageInformation?.redirectTo ? (
            <Button component={Link} to={messageInformation.redirectTo} variant="contained" color="primary">
              {messageInformation?.confirmationText || 'Cerrar'}
            </Button>
          ) : (
            <Button onClick={onClose} variant="contained" color="primary">
              {messageInformation?.confirmationText || 'Cerrar'}
            </Button>
          )
        }

      </DialogActions>
    </Dialog>
  );
};

