import {
  Card,
  CardContent,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import { useTransaction } from '../../hooks/useTransaction';
import { useEffect, useState } from 'react';
import { RechargeWithUsername, Supplier } from '../../interfaces';

/**
 * ListTransactionComponent
 *
 * Componente de React que renderiza una lista de transacciones.
 * Puede incluir funcionalidades como filtrado, ordenamiento y paginación.
 *
 */
const ListTransactionComponent = () => {
  const { getTransactions, getSuppliers, loading, error } = useTransaction();
  const [rows, setRows] = useState<RechargeWithUsername[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchData = async () => {
      const [suppliersData, transactionsData] = await Promise.all([
        getSuppliers(),
        getTransactions(),
      ]);

      console.log('Fetched transactions:', transactionsData.length, loading);
      setSuppliers(suppliersData);
      setRows(transactionsData);
    };
    fetchData();
  }, []);

  return (
    <Card
      sx={{
        backgroundColor: 'background.default',
        opacity: 0.96,
        width: '100%',
        maxWidth: { xs: '100%', sm: 600, md: 800 },
        mx: 'auto',
        maxHeight: { xs: '70vh', sm: '60vh' },
        p: { xs: 1, sm: 2 },
      }}
      elevation={4}
    >
      <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
        <Typography
          gutterBottom
          variant={isMobile ? 'h6' : 'h4'}
          color="primary"
          fontWeight={500}
          align="center"
        >
          Historial
        </Typography>



        {error && (
          <Box mt={2}>
            <Typography align="center" color="error">
              {error}
            </Typography>
          </Box>
        )}


        {rows.length == 0 ? (

          <Box mt={2}>
            <Typography align="center" color="text.secondary">
              No hay transacciones registradas.
            </Typography>
          </Box>
        ) : (
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: isMobile ? '55vh' : '40vh',
              overflowY: 'auto',
              overflowX: 'auto',
              borderRadius: 2,
              '&::-webkit-scrollbar': {
                width: 6,
                height: 6,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.primary.main,
                borderRadius: 4,
              },
            }}
          >
            <Table
              size={isMobile ? 'small' : 'medium'}
              sx={{
                minWidth: 400,
                '& td, & th': {
                  padding: isMobile ? '6px 8px' : '12px 16px',
                  fontSize: isMobile ? '0.75rem' : '0.875rem',
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Cajero</TableCell>
                  <TableCell align="center">Proveedor</TableCell>
                  <TableCell align="center">Celular</TableCell>
                  <TableCell align="center">Valor</TableCell>
                  <TableCell align="center">Estado</TableCell>
                  <TableCell align="center">Transacción ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.transactionalId}>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell align="center">
                      {suppliers.find((i) => i.id === row.supplierId)?.name ?? 'N/A'}
                    </TableCell>
                    <TableCell align="center">{row.cellPhone}</TableCell>
                    <TableCell align="center">${row.value}</TableCell>
                    <TableCell align="center">
                      <Chip
                        size={isMobile ? 'small' : 'medium'}
                        label={row.status}
                        color="success"
                      />
                    </TableCell>
                    <TableCell align="center">{row.transactionalId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default ListTransactionComponent;
