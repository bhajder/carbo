import React from 'react';
import AppRouter from './routers/AppRouter';

import { ThemeProvider } from 'styled-components';
import { withTheme } from 'styled-components';
import theme from 'theme/index.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default withTheme(App);
