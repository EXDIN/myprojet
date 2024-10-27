import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './context/AuthContext.tsx'
import './i18n.ts';
import App from './routing/App.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)