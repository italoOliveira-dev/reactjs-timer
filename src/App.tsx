import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { StyleGlogal } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyleGlogal />
    </ThemeProvider>
  );
}
