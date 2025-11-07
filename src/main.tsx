import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './store/index'
import { ThemeProvider, CssBaseline } from '@mui/material';
import './i18n'

import { getTheme } from './theme';

export const Root = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const theme = getTheme(themeState.mode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>,
)
