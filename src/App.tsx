import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { StyleGlogal } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <StyleGlogal />
    </ThemeProvider>
  );
}
