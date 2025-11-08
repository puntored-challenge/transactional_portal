

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Typography } from '@mui/material';
import { RechargeResponse } from '../../interfaces';

interface TransactionResultDialogProps {
  open: boolean;
  transactionResult?: RechargeResponse;
  onClose: () => void;
}


/**
 * TransactionResultDialog Component
 *
 * Este componente muestra un diálogo/modal con el resultado de una transacción.
 *
 * @param {object} props - Propiedades del componente.
 * @param {boolean} props.open - Indica si el diálogo está abierto o cerrado.
 * @param {TransactionResult} props.transactionResult - Objeto con los detalles del resultado de la transacción.
 * @param {() => void} props.onClose - Función que se ejecuta al cerrar el diálogo.
 *
 */
export const TransactionResultDialog: React.FC<TransactionResultDialogProps> = ({
  open,
  transactionResult,
  onClose
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        variant="h5"
        align="center"
        color="primary"
      >
        Resultado de la transacción
      </DialogTitle>

      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box>
            <Typography variant="body1" fontWeight={600}>
              ID de transacción:
            </Typography>
            <Typography variant="body1">
              {transactionResult?.transactionalID ?? '—'}
            </Typography>
          </Box>

          <Box>
            <Typography variant="body1" fontWeight={600}>
              Estado:
            </Typography>
            <Typography variant="body1">
              {transactionResult?.message ?? '—'}
            </Typography>
          </Box>

          <Box>
            <Typography variant="body1" fontWeight={600}>
              Celular:
            </Typography>
            <Typography variant="body1">
              {transactionResult?.cellPhone ?? '—'}
            </Typography>
          </Box>

          <Box>
            <Typography variant="body1" fontWeight={600}>
              Valor:
            </Typography>
            <Typography variant="body1">
              {transactionResult?.value ? `$${transactionResult.value}` : '—'}
            </Typography>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary" fullWidth>
          Ir a recargar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
