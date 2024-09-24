import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button';
import { defaultTheme } from './styles/themes/default';
import { StyleGlogal } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      <Button />
      <Button />

      <StyleGlogal />
    </ThemeProvider>
  );
}
