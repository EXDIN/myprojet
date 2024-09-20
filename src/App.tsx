import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './mainpage/MainPage';
import Registration from './registrationpage/Registration';
import Authorization from './authorizationpage/Authorization';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage/>} />
        <Route path="/registration" element={ <Registration/>} />
        <Route path="/authorization" element={ <Authorization/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
