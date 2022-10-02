import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { theme } from './components/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
