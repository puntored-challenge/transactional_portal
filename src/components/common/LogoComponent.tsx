import { Box, useTheme } from '@mui/material'

const LogoComponent = () => {
  const theme = useTheme();
  return (
    <Box
      alignItems={'center'}
      display={'flex'}
      width={
        {
          xs: 120,
          md: 140
        }
      }
    >
      <img 
        src="https://b2608939.smushcdn.com/2608939/wp-content/uploads/2022/07/Logo-Puntored.png?lossy=2&strip=1&webp=1https://b2608939.smushcdn.com/2608939/wp-content/u…/2022/07/Logo-Puntored.png?lossy=2&strip=1&webp=1" 
        alt="PuntoRed Logo" 
        style={{
          width: '100%',
          height: 'auto',
          filter:
            theme.palette.mode === 'dark'
              ? 'drop-shadow(0 0 5px rgba(255, 255, 255, 1))'
              : 'none',
        }}
      />      
    </Box>
  )
}

export default LogoComponent
