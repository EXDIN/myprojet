import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './context/AuthContext.tsx'
import './i18n.ts';
import App from './routing/App.tsx';
import store from './store/store.ts';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppProvider>
  </React.StrictMode>,
)