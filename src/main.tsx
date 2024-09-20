import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import userData, { UserDataContext } from './components/context/AuthContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserDataContext.Provider value={userData}>
      <App/>
    </UserDataContext.Provider>
  </React.StrictMode>,
)
